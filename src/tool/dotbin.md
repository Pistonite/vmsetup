# dotbin
[`dotbin`](https://github.com/Pistonight/dotbin) is my personal collection of
python scripts, including tools for managing portable software

We will also install `pyenv` into `dotbin` for managing python versions
and running the python setup for `dotbin`.

Make sure you already have [`Rust`](./rust.md) and [`git`](./git.md) installed.
Since we need them here.

:::warning
For Windows, before we start, make sure all Python installation has been uninstalled.
Make sure the `PYTHONHOME` and any environment variables starting with `PYENV_` are cleared.
Also make sure the directory you are running commands in doesn't have a `.python-version` file.
:::

## Clone the `dotbin` and `pyenv` repos
### Windows
```powershell
git clone https://github.com/Pistonight/dotbin.git $env:USERPROFILE/dotbin
mkdir -p $env:USERPROFILE/dotbin/extra/portable
git clone https://github.com/pyenv-win/pyenv-win.git $env:USERPROFILE\dotbin\extra\portable\pyenv
```
### Linux
```bash
git clone https://github.com/Pistonight/dotbin.git ~/dotbin
mkdir -p ~/dotbin/extra/portable
git clone https://github.com/pyenv/pyenv.git ~/dotbin/extra/portable/pyenv
```

## Setup `pyenv` environment
- Windows: Execute the following in powershell
    ```powershell
    $dotbin_pyenv=$env:USERPROFILE+"\dotbin\extra\portable\pyenv\pyenv-win\"
    [System.Environment]::SetEnvironmentVariable('PYENV',$dotbin_pyenv,"User")
    [System.Environment]::SetEnvironmentVariable('PYENV_ROOT',$dotbin_pyenv,"User")
    [System.Environment]::SetEnvironmentVariable('PYENV_HOME',$dotbin_pyenv,"User")
    [System.Environment]::SetEnvironmentVariable('PATH',$dotbin_pyenv+"bin;"+$dotbin_pyenv+"shims;"+[System.Environment]::GetEnvironmentVariable('path', "User"),"User")
    ```
- Linux: add the following to `.bashrc`
    ```bash
    export PYENV_ROOT=$HOME/dotbin/extra/portable/pyenv
    eval "$(pyenv init -)"
    ```

## Install Python and setup `dotbin`
Restart your shell, then:
- Windows:
    ```powershell
    pyenv install 3.12
    pyenv global 3.12
    python $env:USERPROFILE\dotbin\script\_setup.py $PROFILE
    pip install -r $env:USERPROFILE\dotbin\requirements.txt
    ```
- Linux:
    ```bash
    pyenv install 3.12
    pyenv global 3.12
    python ~/dotbin/script/_setup.py ~/.bashrc
    pip install -r ~/dotbin/requirements.txt
    ```

## Coreutils (Windows)
`dotbin` relies on GNU Coreutils. On Windows, we can setup `coreutils`, which is
a Rust implementation of GNU Coreutils.
```powershell
python $env:USERPROFILE\dotbin\script\_coreutils.py
```
Then, add the following to the PowerShell Profile
```powershell
# Coreutils
. $PSScriptRoot\Initialize-Coreutils.ps1
```

## Setup PATH for `dotbin`
Add the following to `PATH`
- Windows:
    ```powershell
    [System.Environment]::SetEnvironmentVariable('PATH', [System.Environment]::GetEnvironmentVariable('PATH', "User") + ';%USERPROFILE%\dotbin\extra\symlink;%USERPROFILE%\dotbin\extra\bin', "User")
    ```
- Linux:
    ```bash
    export PATH=$PATH:$HOME/dotbin/extra/symlink:$HOME/dotbin/extra/bin
    ```

Restart the shell, and finally, run `dotbin-extra setup` to setup the directories


