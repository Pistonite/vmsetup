# Zig
Zig is a programming language and its compiler can also compile C.
It's here to compile tree-sitter parsers for neovim

## Download
Download ZIP from https://ziglang.org/download/

## Install
1. Download ZIP from https://ziglang.org/download/ and put it in `Downloads`
2. Set version for scripts
    ```powershell
    $version="0.14.0-dev.1951+857383689"
3. Extract it
    ```powershell
    7z x -y ~/Downloads/zig-windows-x86_64-$version.zip "-o$HOME/dotbin/extra/portable"
3. Configure link
    ```powershell
    Add-Content -Path ~\dotbin\extra\portable\link -Value "zig-*/zig.exe"
    sudo dotbin-link
    ```
4. Verify installation
    ```powershell
    zig version
    ```
