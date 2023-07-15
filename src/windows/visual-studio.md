# Visual Studio
Who doesn't like 20GB of compilers

## Download
Download Visual Studio Installer from https://visualstudio.microsoft.com/downloads/

## Install
Launch the installer and select components, make sure the following are selected
- Windows 11 SDK (Or 10 if you are using Windows 10)
- MSVC

Other components might get auto selected

## Adding cl to path
We need [Pscx](https://www.powershellgallery.com/packages/Pscx) for the `Import-VisualStudioVars` command.

Run as admin
```powershell
Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
Install-Module -Name Pscx -AllowPrerelease
Install-Module -Name VSSetup
```
:::tip
If you get an error on `-AllowPrerelease`, run
```
Install-Module PowershellGet -AllowClobber -Force
```
Then restart powershell
:::

After installing the extension. We will create a custom wrapper that loads visual studio vars when needed.

Run `notepad $Profile` and add
```
# Wrapper for loading Visual Studio vars on demand
# because it's slow
function Import-VisualStudioVarsIfNeeded {
    Get-Command cl.exe -ErrorAction SilentlyContinue | Out-Null
    if ($?) {
        return
    }
    Import-VisualStudioVars 2022 amd64
}
```
:::tip
Change `2022` and `amd64` to your VS version and OS arch
:::
