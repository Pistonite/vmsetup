# Node.js
NodeJS is still the go-to runtime for JS.

## Install `nvm`
:::warning
Before installing `nvm`, make sure existing node installations are uninstalled
:::
### Windows
1. Download `nvm-noinstall.zip` from https://github.com/coreybutler/nvm-windows/releases
   and save it in the `Downloads` directory
2. Extract it
    ```powershell
    Expand-Archive $env:USERPROFILE/Downloads/nvm-noinstall.zip -DestinationPath $env:USERPROFILE/dotbin/extra/portable/nvm
    ```
3. Configure environment variables
    ```powershell
    $dotbin_nvm=$env:USERPROFILE+"\dotbin\extra\portable\nvm"
    [System.Environment]::SetEnvironmentVariable('NVM_HOME',$dotbin_nvm,"User")
    [System.Environment]::SetEnvironmentVariable('NVM_SYMLINK',$dotbin_nvm+"\symlink","User")
    $path=[System.Environment]::GetEnvironmentVariable('PATH', "User")
    if (-not($path -match ";$")) { $path+=";" }
    $path += $dotbin_nvm+";"+$dotbin_nvm+"\symlink"
    [System.Environment]::SetEnvironmentVariable('PATH',$path,"User")
    ```
4. Configure Settings
    ```powershell
    code $env:USERPROFILE\dotbin\extra\portable\nvm\settings.txt
    ```
    Add the following, replace `HOME` with the path to your home directory (default is `C:\Users\<username>`)
    ```txt
    root: HOME\dotbin\extra\portable\nvm
    path: HOME\dotbin\extra\portable\nvm\symlink
    arch: 64
    proxy: none
    ```
5. Restart the shell. Verify installation
    ```powershell
    nvm version
    ```

### Linux
1. Clone the [`nvm`](https://github.com/nvm-sh/nvm) repository
    ```bash
    git clone https://github.com/nvm-sh/nvm.git ~/dotbin/extra/portable/nvm
    ```
2. Check out the latest release, and activate it
    ```bash
    cd ~/dotbin/extra/portable/nvm
    git checkout v0.40.1
    . ./nvm.sh
    ```
3. Add the following to `~/.bashrc`
    ```bash
    # NVM
    export NVM_DIR="$HOME/dotbin/extra/portable/nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
    ```

## Install Node with NVM
I only need v18 LTS. You can install other versions too
```bash
nvm install 18 --lts
```
It should automatically be selected as the active node version. You can also manually switch to it
```bash
nvm use 18
```
You can list all the versions with
```bash
nvm ls
```
And confirm the current node version
```bash
node -v
npm -v
```
