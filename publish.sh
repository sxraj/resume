#!/bin/bash
# Publishes your changes to surajkumar.in: checks the site builds, saves the changes, and pushes to GitHub.
# Usage: ./publish.sh "What you changed"
set -e
cd "$(dirname "$0")"

git fetch -q origin main
if [ -z "$(git status --porcelain)" ] && [ "$(git rev-list --count origin/main..HEAD)" = 0 ]; then
	echo "Nothing new to publish."
	exit 0
fi

if [ ! -d node_modules ]; then
	echo "Installing dependencies (first run only)..."
	npm ci
fi

echo "Checking the site builds..."
if ! npm run build; then
	echo
	echo "The build failed, so nothing was published. Fix the error above and try again."
	exit 1
fi

echo
echo "Changed files:"
git status --short

MESSAGE="$1"
if [ -z "$MESSAGE" ]; then
	read -r -p "Describe the change (e.g. Added new project): " MESSAGE || true
fi
[ -n "$MESSAGE" ] || MESSAGE="Update website content"

read -r -p "Publish to surajkumar.in now? (y/n) " ANSWER || true
case "$ANSWER" in
	y | Y | yes | Yes) ;;
	*)
		echo "Cancelled. Nothing was published."
		exit 0
		;;
esac

if [ -n "$(git status --porcelain)" ]; then
	git add -A
	git commit -q -m "$MESSAGE"
fi
git pull -q --rebase origin main
git push -q origin main

echo
echo "Pushed to GitHub. The site updates in about 2 minutes."
echo "  1. Watch it build: https://github.com/sxraj/resume/actions (wait for the green tick)"
echo "  2. Then open https://surajkumar.in and press Cmd+Shift+R to reload"
