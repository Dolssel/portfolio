# Starts the dev server using Node 24 without changing the global Node version
# (your machine's global Node stays at v10 for work projects).
# Usage: right-click > Run with PowerShell, or from a terminal: .\dev.ps1
$env:Path = "C:\Users\Dalison\AppData\Roaming\nvm\v24.16.0;" + $env:Path
Set-Location $PSScriptRoot
npm run dev
