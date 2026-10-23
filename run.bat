@echo off
title Hostayy Next.js App
echo ========================================================
echo   Starting Hostayy Next.js Boutique Hospitality App...
echo ========================================================
echo.
echo Opening Hostayy in your web browser at http://localhost:3000 ...
start http://localhost:3000
echo.
echo Next.js Dev Server running on http://localhost:3000
echo Press Ctrl+C in this window to stop the server.
echo.
call npm run dev
pause
