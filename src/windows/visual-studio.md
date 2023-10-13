# Visual Studio
Who doesn't like 20GB of compilers
:::tip
If the environment has another way to have a compiler like gcc available, you can skip this
:::

## Download
Download Visual Studio **Build Tools** Installer from https://visualstudio.microsoft.com/downloads/
:::tip
Scroll down to find the build tools. Don't download the IDE.
:::

## Install
Launch the installer, select "Windows Desktop C++ Development" (or whatever it's called)

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

## Or: Use cl from Developer Shell
If the method above doesn't work, you can skip it and use this method instead.

Everytime if you get an error saying compiler or linker not found, run the command again using "Developer Powershell for VS 2022" An example is when installing treesitter parsers in neovim.

It should be available as a shell in the Terminal app, or you can search in the start menu to find it
