#!/bin/bash
# Builds the site exactly the way GitHub does and shows it at http://localhost:4173
# Run it again after editing to refresh the preview. Stop it with ./preview-stop.sh
set -e
cd "$(dirname "$0")"

PORT=4173
URL="http://localhost:$PORT"

./preview-stop.sh >/dev/null

if [ ! -d node_modules ]; then
	echo "Installing dependencies (first run only)..."
	npm ci
fi

echo "Building the site..."
npm run build

mkdir -p .preview
nohup node_modules/.bin/vite preview --port "$PORT" --strictPort >.preview/server.log 2>&1 &
echo $! >.preview/server.pid

for _ in $(seq 1 40); do
	if curl -s -o /dev/null "$URL"; then
		echo
		echo "Preview is running at $URL"
		echo "Stop it with ./preview-stop.sh"
		open "$URL"
		exit 0
	fi
	sleep 0.25
done

echo "The preview did not start. Details:"
cat .preview/server.log
./preview-stop.sh >/dev/null
exit 1
