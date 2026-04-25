@echo off
cd /d "D:\Web Dev Previous\javascript"
:loop
git add .
git commit -m "Auto commit %date% %time%"
git push origin main
timeout /t 300
goto loop

