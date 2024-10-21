# Ninja
Ninja is a fast build system that requires an external configurator script

## Install
- Windows
    1. Download `ninja-win.zip` from the [Github release](https://github.com/ninja-build/ninja/releases) and save it to `Downloads`
    2. Extract it
        ```powershell
        7z x -y ~/Downloads/ninja-win.zip "-o$HOME/dotbin/extra/bin"
        ```
- Arch Linux
    ```bash
    sudo pacman -Syu ninja
    ```
:::warning
Verify installation with
```bash
ninja --version
```
:::

## Configurator
If you want to use Rust for configuring Ninja, I wrote a library for it: [`ninja-writer`](https://docs.rs/ninja-writer)