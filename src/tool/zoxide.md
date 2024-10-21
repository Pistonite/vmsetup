# Zoxide
Zoxide is a fuzzy directory jumper

## Dependencies
Zoxide depends on `fzf`

- Windows:
    1. Download ZIP from [GitHub release](https://github.com/junegunn/fzf/releases) and put it in `Downloads`
    2. Set version for scripts
        ```powershell
        $version="0.55.0"
        ```
    3. Extract it
        ```powershell
        7z x -y ~/Downloads/fzf-$version-windows_amd64.zip "-o$HOME/dotbin/extra/bin"
    4. Verify installation
        ```powershell
        fzf --version
        ```
- Arch Linux:
    ```bash
    sudo pacman -Syu fzf
    ```

## Install
```bash
cargo binstall zoxide
```

## Shell
:::warning
I have added `--cmd c` to use `c` instead of `z` as the command
:::
- Windows
    1. Open PowerShell Profile
        ```powershell
        nodepad $Profile
        ```
    2. Add the following
        ```powershell
        # Zoxide
        Invoke-Expression (& { (zoxide init powershell --cmd c | Out-String) })
        ```
- Linux
    1. Add the following to `~/.bashrc`
        ```bash
        # Zoxide 
        eval "$(zoxide init bash --cmd c)"
        ```

Now, `cd` will still behavior as normal, and `c` will use fuzzy directory jump
