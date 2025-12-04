@echo off
REM Windows batch file alternatives for docker-compose up -d
REM Run this in VS Code terminal (cmd.exe)

echo Building frontend locally...
call npm run build

echo Building app image...
docker build -t syntha-forge-app .

echo Building api image...
docker build -t syntha-forge-api ./server

echo Starting app container...
docker run -d --name syntha-forge-app -p 8080:80 -e NODE_ENV=production --restart unless-stopped syntha-forge-app

echo Starting api container...
docker run -d --name syntha-forge-api -p 4000:4000 -e NODE_ENV=production --restart unless-stopped syntha-forge-api

echo Services started successfully!
pause