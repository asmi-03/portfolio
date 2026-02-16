@echo off
echo Starting Portfolio Project...

start "Portfolio Server" cmd /k "cd server && npm run dev"
start "Portfolio Client" cmd /k "cd client && npm run dev"

echo Servers started in new windows.
timeout /t 5
start http://localhost:5173
pause
