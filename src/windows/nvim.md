# Neovim on Windows
Finally, Neovim is the editor of choice for rapid-race development.

## Prerequisites
Make sure these are already setup:
- [`dotbin`](../tool/dotbin.md), which includes Python and coreutils
- [`zig`](./zig.md) for compiling tree-sitter parsers
- [`node`](../tool/node.md) for potential node integration

## Installation
1. Download the latest stable release from https://github.com/neovim/neovim/releases.
   Save `nvim-win64.zip` to the `Downloads` directory
2. Extract it
    ```powershell
    Expand-Archive $env:USERPROFILE\Downloads\nvim-win64.zip -DestinationPath $env:USERPROFILE\dotbin\extra\portable
    ```
3. Configure link
    ```powershell
    code $env:USERPROFILE\dotbin\extra\portable\link
    ```
    Add the following

    ```txt
    shim:nvim-win64\bin\nvim.exe
    shim:nvim-win64\bin\win32yank.exe
    shim:nvim-win64\bin\xxd.exe
    ```
4. Configure alias on Windows
    ```powershell
    code $env:USERPROFILE\dotbin\extra\portable\windows-alias
    ```
    Add the following

    ```txt
    nvim.bat: vim.bat, vi.bat
    ```
5. Create the links with 
    ```powershell
    sudo pwsh -c{dotbin-extra link}
    ```
6. Verify the installation
    ```powershell
    nvim --version
    ```

## Packer
```powershell
mkdir -p "$env:LOCALAPPDATA\nvim-data\site\pack\packer\start"
git clone https://github.com/wbthomason/packer.nvim "$env:LOCALAPPDATA\nvim-data\site\pack\packer\start\packer.nvim"
```

## Config
Download the config files for Windows by running
```powershell
rm -rf $env:LOCALAPPDATA\nvim
iwr https://vmsetup.pistonite.org/scripts/dl-nvim-config.py -OutFile dl-nvim-config.py
python dl-nvim-config.py
rm dl-nvim-config.py
```

## Setup
You should be able to complete the regular [nvim setup](../tool/nvim.md)
