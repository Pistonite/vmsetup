# Neovim on Windows
Setting up the same Neovim environment on Windows. Bye VSCode :)

## Requirement
Make sure you have [zig](./zig.md) installed. This is the easiest way to get a compatible C compiler.

## Installation
1. Download pre-built binary for Windows from https://github.com/neovim/neovim/wiki/Installing-Neovim
    :::tip
    Either the zip or msi work. Pick the one you like
    :::
2. Add to powershell path
    ```powershell
    notepad $Profile
    ```
    Add the following. Replace the path with the path to `bin` directory of the neovim installation
    ```
    # Neovim
    $env:HOME = $env:USERPROFILE
    $env:PATH = "C:\Program Files\Neovim\bin;$env:PATH"
    Set-Alias vim nvim
    Set-Alias vi nvim
    ```
3. Reload powershell and you should be able to run nvim

## Packer
```powershell
git clone https://github.com/wbthomason/packer.nvim "$env:LOCALAPPDATA\nvim-data\site\pack\packer\start\packer.nvim"
```

## Config
1. Download the config files
    ```powershell
    iwr -useb https://vmsetup.pistonite.org/dl-nvim-config.ps1 | iex
    ```
1. Start nvim. Follow [the normal nvim setup](/tool/nvim#install-the-plugins) from now on
