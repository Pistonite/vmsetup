# Neovim on Windows
Setting up the same Neovim environment on Windows. Bye VSCode :)

## Requirement
Make sure you have [zig](./zig.md) installed. This is the easiest way to get a compatible C compiler.

## Installation
1. Download pre-built binary for Windows from https://github.com/neovim/neovim/wiki/Installing-Neovim
    :::tip
    Either the zip or msi work. Pick the one you like
    :::
2. Add the nvim directory to PATH
3. Set aliases in powershell
    ```powershell
    notepad $Profile
    ```
    Add the following. Replace the path with the path to `bin` directory of the neovim installation
    ```
    # Neovim
    $env:HOME = $env:USERPROFILE
    Set-Alias vim nvim
    Set-Alias vi nvim
    ```
4. Reload powershell and you should be able to run nvim

## Packer
```powershell
git clone https://github.com/wbthomason/packer.nvim "$env:LOCALAPPDATA\nvim-data\site\pack\packer\start\packer.nvim"
```

## Config
1. Download the config files
    ```powershell
    Invoke-WebRequest https://vmsetup.pistonite.org/dl-nvim-config.py -OutFile dl-nvim-config.py
    python dl-nvim-config.py
    Remove-Item dl-nvim-config.py
    ```
1. Start nvim. Follow [the normal nvim setup](/tool/nvim#install-the-plugins) from now on
