#!/bin/bash
# Stops the local preview started by ./preview-start.sh
cd "$(dirname "$0")"

PID_FILE=.preview/server.pid

if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
	kill "$(cat "$PID_FILE")"
	echo "Preview stopped."
else
	echo "Preview was not running."
fi
rm -f "$PID_FILE"
