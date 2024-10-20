# Zig
Zig is a programming language and its compiler can also compile C.
It's here to compile tree-sitter parsers for neovim

## Download
Download from https://ziglang.org/download/

## Install
1. Extract the downloaded file
2. Move the content to `~/dotbin/extra/portable`
3. Configure link
    ```powershell
    notepad-- $env:USERPROFILE\dotbin\extra\portable\link &
    ```
    Add the following

    ```txt
    zig-*/zig.exe
    ```
    Then run
    
    ```powershell
    sudo dotbin-link
    ```
4. Verify installation
    ```powershell
    zig version
    ```
