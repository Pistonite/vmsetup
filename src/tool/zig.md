# Zig
Zig is a programming language that tries to be a modern C.
Thanks to being a C-compatible compiler, it is a really good option
for compiling C on Windows

:::warning
Zig is still not stable yet. Therefore we are installing the latest
dev version from the website instead of through package managers
:::

## Install
- Windows:
    1. Download ZIP from https://ziglang.org/download/ and put it in `Downloads`
    2. Set version for scripts
        ```powershell
        $version="0.14.0-dev.2079+ba2d00663"
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
    5. Exclude `zig` from Windows Defender so compilation is faster
        ```powershell
        Add-MpPreference -ExclusionPath ~/dotbin
        Add-MpPreference -ExclusionProcess zig
        ```
        :::warning
        Run as admin!
        :::
- Linux
    1. Set version for scripts
        ```bash
        VERSION="0.14.0-dev.2079+ba2d00663"
        ```
    2. Download and extract
        ```bash
        wget https://ziglang.org/builds/zig-linux-x86_64-$VERSION.tar.xz -O ~/zig-$VERSION.tar.xz
        7z x -y ~/zig-$VERSION.tar.xz -so | 7z x -y -si -ttar "-o$HOME/dotbin/extra/portable"
        chmod +x ~/dotbin/extra/portable/zig-*/zig
        ```
    3. Configure link
        ```bash
        echo "zig-*/zig" >> ~/dotbin/extra/portable/link
        dotbin-link
        ```
    4. Verify installation
        ```bash
        zig version
        ```
