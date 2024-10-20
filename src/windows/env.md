# Environment
Configure a minimal shell environment

## Environment Variables
Set some environment variables that tools use

```powershell
[System.Environment]::SetEnvironmentVariable('HOME',$env:USERPROFILE,"User")
[System.Environment]::SetEnvironmentVariable('EDITOR','nvim',"User")
```

## PowerShell Profile

Add the following to the PowerShell Profile (`notepad $PROFILE`)

```powershell
# Bind Ctrl+D to exit
Set-PSReadlineKeyHandler -Key ctrl+d -Function ViExit
```
