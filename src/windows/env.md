# Environment
Configure a minimal shell environment

## Environment Variables
Set some environment variables that tools use

```powershell
[System.Environment]::SetEnvironmentVariable('HOME',$env:USERPROFILE,"User")
```

## PowerShell Profile

Add the following to the PowerShell Profile (`code $PROFILE`)

```powershell
# Bind Ctrl+D to exit
Set-PSReadlineKeyHandler -Key ctrl+d -Function ViExit

# Basic commands
Set-Alias -Name which -Value Get-Command
```
