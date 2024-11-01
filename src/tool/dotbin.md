# Dotbin
[`dotbin`](https://github.com/Pistonight/dotbin) is my personal tool for scripting and managing portable software. On Windows, it also sets up Unix and GNU utilities.

Make sure you already have [`Rust`](./rust.md) Since we need it here.

As part of the process, we will set up `pyenv`, and for Windows, `git`.

:::warning
For Windows, before we start, make sure all Python installation has been uninstalled.
Make sure the `PYTHONHOME` and any environment variables starting with `PYENV_` are cleared.
Also make sure the directory you are running commands in doesn't have a `.python-version` file.
:::

:::warning
Please run the Windows commands with PowerShell 5 for now. In the Windows setup, we will setup Windows PowerShell 7, which you should use for the rest of the setup and in general.
:::

## Download Portable Git
:::tip
Skip this section on Linux, or another installation of Git is to be used.
:::

1. Uninstall any existing Git installations, and clean up the environment variables (`PATH`)
2. Download the portable Git from https://git-scm.com/downloads/win
3. Extract the self-extracting archive to `Downloads`
4. Add the `bin` folder to path temporarily
    ```powershell
    $env:PATH+=";C:\Users\$env:USERNAME\Downloads\PortableGit\bin"
    ```
5. Verify you can run `git` from the command line
    ```powershell
    get-command git
    ```

## Clone the `dotbin` and `pyenv` repos
### Windows
```powershell
git clone https://github.com/Pistonite/dotbin.git $env:USERPROFILE/dotbin
New-Item -ItemType Directory -Path $env:USERPROFILE/dotbin/extra/portable -Force
git clone https://github.com/pyenv-win/pyenv-win.git $env:USERPROFILE\dotbin\extra\portable\pyenv
```

For Portable Git, move it to the `dotbin` folder, and configure links
```powershell
Move-Item -Path "C:\Users\$env:USERNAME\Downloads\PortableGit" -Destination $env:USERPROFILE\dotbin\extra\portable\git
Add-Content -Path $env:USERPROFILE\dotbin\extra\portable\link -Value "git\cmd\git.exe"
```
### Linux
```bash
git clone https://github.com/Pistonite/dotbin.git ~/dotbin
mkdir -p ~/dotbin/extra/portable
git clone https://github.com/pyenv/pyenv.git ~/dotbin/extra/portable/pyenv
```

## Setup `pyenv` and `dotbin` environment
- Windows: Execute the following in powershell
    ```powershell
    $dotbin_pyenv=$env:USERPROFILE+"\dotbin\extra\portable\pyenv\pyenv-win\"
    $dotbin_bin=$env:USERPROFILE+"\dotbin\bin"
    $dotbin_extra_symlink=$env:USERPROFILE+"\dotbin\extra\symlink"
    $dotbin_extra_bin=$env:USERPROFILE+"\dotbin\extra\bin"
    $path=$dotbin_pyenv+"bin;"+$dotbin_pyenv+"shims;"+$dotbin_bin+";"+$dotbin_extra_symlink+";"+$dotbin_extra_bin+";"
    [System.Environment]::SetEnvironmentVariable('PYENV',$dotbin_pyenv,"User")
    [System.Environment]::SetEnvironmentVariable('PYENV_ROOT',$dotbin_pyenv,"User")
    [System.Environment]::SetEnvironmentVariable('PYENV_HOME',$dotbin_pyenv,"User")
    [System.Environment]::SetEnvironmentVariable('PATH',$path+[System.Environment]::GetEnvironmentVariable('path', "User"),"User")
    ```
- Linux: add the following to `.bashrc`
    ```bash
    # Pyenv
    export PYENV_ROOT=$HOME/dotbin/extra/portable/pyenv
    export PATH=$PYENV_ROOT/bin:$PYENV_ROOT/shims:$PATH
    eval "$(pyenv init -)"
    alias epyvenv='source ./venv/bin/activate'
    # Dotbin
    export PATH=$HOME/dotbin/bin:$HOME/dotbin/extra/symlink:$HOME/dotbin/extra/bin:$PATH
    ```
:::danger
Restart the shell afterward to get the new `PATH`
:::

## Setup PowerShell 7 (Windows Only)
We will install PowerShell 7 into `dotbin` and set it as the default profile for Windows Terminal.

The guides work with PowerShell 7.5 and above.

1. Download the ZIP from the [GitHub releases](https://github.com/PowerShell/PowerShell/releases). You might need to pick a preview release.
2. Set the version for scripts
    ```powershell
    $version="7.5.0-preview.5"
    ```
3. Extract it
    ```powershell
    Expand-Archive -Path $env:USERPROFILE\Downloads\PowerShell-$version-win-x64.zip -DestinationPath $env:USERPROFILE\dotbin\extra\portable\pwsh
    ```
4. Add to `PATH`
    ```powershell
    $path=$env:USERPROFILE+"\dotbin\extra\portable\pwsh;"+[System.Environment]::GetEnvironmentVariable('path', "User")
    [System.Environment]::SetEnvironmentVariable('PATH',$path,"User")
    ```
5. Close PowerShell 5 (aka Windows PowerShell) and open Windows Terminal.
6. Right click the title bar and choose "Settings"
7. Click "Open JSON settings" on the lower left
8. Change `defaultProfile` to `{bb6f7902-320e-4f8c-bbad-9578445057d2}`
9. Under `profiles.list`, add a new profile at the top:
    ```json
    {
        "commandline": "%USERPROFILE%\\dotbin\\extra\\portable\\pwsh\\pwsh.exe -NoLogo",
        "guid": "{bb6f7902-320e-4f8c-bbad-9578445057d2}",
        "hidden": false,
        "icon": "%USERPROFILE%\\dotbin\\extra\\portable\\pwsh\\pwsh.exe",
        "name": "PowerShell 7",
        "startingDirectory": "%USERPROFILE%"
    },
    ```
10. Restart Windows Terminal, and confirm your PowerShell version:
    ```powershell
    $PSVersionTable
    ```

## Install Python and setup `dotbin`
:::warning
On Windows, `~` expansion only works with PowerShell 7.5 and above!
:::
```bash
pyenv install 3.12
pyenv global 3.12
pip install -r ~/dotbin/requirements.txt
python ~/dotbin/script/setup.py
```

:::info
This also sets up extra utils and [coreutils](https://github.com/uutils/coreutils) for Windows.
Use `vipwsh` to edit the PowerShell profile and add the following to the profile.
```powershell
# Coreutils
. $PSScriptRoot\Initialize-Coreutils.ps1
```
:::
:::warning
Restart the shell afterward!

On Windows, for Portable Git setup, do one last step to set up `git` in PATH
```powershell
sudo dotbin-link
```
:::

## Windows Defender
On Windows, exclude `dotbin` from Windows Defender, so tool start-up is faster.

:::warning
Run as admin!
:::
```powershell
Add-MpPreference -ExclusionPath ~/dotbin
```
