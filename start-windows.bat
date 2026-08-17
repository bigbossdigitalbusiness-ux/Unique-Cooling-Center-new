@echo off
title Unique Cooling Center - Local Server
echo ====================================================
echo Starting Unique Cooling Center Website...
echo ====================================================
echo.
if not exist node_modules (
  echo Installing dependencies, please wait a moment...
  call npm install
)
echo Starting local web server...
echo.
echo Open http://localhost:3000 in your browser!
echo.
call npm run dev
pause
