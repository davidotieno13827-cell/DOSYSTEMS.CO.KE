@echo off
REM Start Development Server for DOsystems Website
REM This batch file automatically starts the dev server

echo.
echo ================================================
echo   DOsystems Website - Development Server
echo ================================================
echo.
echo Checking for node_modules...

if not exist node_modules (
    echo.
    echo Installing dependencies (this may take a few minutes)...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo Error: npm install failed. Make sure Node.js is installed.
        echo Download from: https://nodejs.org/
        pause
        exit /b 1
    )
    echo.
    echo Dependencies installed successfully!
    echo.
)

echo.
echo Starting development server...
echo.
echo The website will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
