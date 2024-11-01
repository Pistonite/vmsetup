# Environment
Configure a minimal shell environment

## Environment Variables
Set some environment variables that tools use

```powershell
[System.Environment]::SetEnvironmentVariable('HOME',$env:USERPROFILE,"User")
[System.Environment]::SetEnvironmentVariable('EDITOR','nvim.cmd',"User")
```
The `VMUSER` variable is used with some scripts for the default
user when ssh-ing into VMs.
```powershell
[System.Environment]::SetEnvironmentVariable('VMUSER','piston',"User")
```

## PowerShell Profile

Add the following to the PowerShell Profile (`vipwsh`)

```powershell
# Bind Ctrl+D to exit
Set-PSReadlineKeyHandler -Key ctrl+d -Function ViExit
# Inline prediction style
Set-PSReadLineOption -Color @{
  InlinePrediction = $PSStyle.Italic + $PSStyle.Foreground.Black
}
```
