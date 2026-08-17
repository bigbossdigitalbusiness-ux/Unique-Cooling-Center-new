#!/bin/bash
echo "===================================================="
echo "Starting Unique Cooling Center Website..."
echo "===================================================="
echo ""
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi
echo "Starting local web server..."
echo "Open http://localhost:3000 in your browser!"
echo ""
npm run dev
