# Environment
Configure a minimal shell environment

## Old Context Menu
Bring back the old right-click context menu by default :)
```powershell
reg.exe add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
```
:::tip
Taking from Official source https://answers.microsoft.com/en-us/windows/forum/all/restore-old-right-click-context-menu-in-windows-11/a62e797c-eaf3-411b-aeec-e460e6e5a82a
:::

## Environment Variables
Set some environment variables that tools use

```powershell
[System.Environment]::SetEnvironmentVariable('HOME',$env:USERPROFILE,"User")
[System.Environment]::SetEnvironmentVariable('EDITOR','nvim',"User")
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

:::warning
Restart the PC after everything
:::
