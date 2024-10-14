# Coreutils

[Coreutils](https://github.com/uutils/coreutils) is a cross-platform Rust rewrite of the GNU coreutils.

We will install that and replace the default PowerShell alias so build scripts are more compatible.

## Install coreutils
I have provided a script to install coreutils and replace the default PowerShell aliases.

```powershell
Invoke-WebRequest https://vmsetup.pistonite.org/scripts/replace-coreutils.py -OutFile replace-coreutils.py
python replace-coreutils.py
Remove-Item replace-coreutils.py
```

Then add the following to the PowerShell profile:
```powershell
# Coreutils
. $PSScriptRoot\Initialize-Coreutils.ps1
```
