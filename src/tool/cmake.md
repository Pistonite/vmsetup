# CMake
CMake is needed on some platforms for building the tools.

## Install
- Windows:
    1. Download CMake ZIP from https://cmake.org/download/ to `Downloads
    2. Set version for scripts
        ```powershell
        $version="3.31.2"
    3. Extract it
        ```powershell
        7z x -y ~/Downloads/cmake-$version-windows-x86_64.zip "-o$HOME/dotbin/extra/portable"
        ```
    4. Configure link
        ```powershell
        Add-Content -Path ~/dotbin/extra/portable/link -Value "cmake-*/bin/cmake.exe"
        sudo dotbin-link
        ```
- Arch Linux:
    ```bash
    sudo pacman -Syu cmake
    ```

:::warning
Verify installation with
```bash
cmake --version
```
:::
