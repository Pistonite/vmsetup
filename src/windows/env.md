# Environment
Configure a minimal shell environment

## Old Context Menu
Save the following to a `.reg` file with `UTF16-LE` encoding and execute it
```regedit
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}]
@=""

[HKEY_CURRENT_USER\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32]
@=""
```

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

Add the following to the PowerShell Profile (`notepad $PROFILE`)

```powershell
# Bind Ctrl+D to exit
Set-PSReadlineKeyHandler -Key ctrl+d -Function ViExit
```

:::warning
Restart the PC after everything
:::
