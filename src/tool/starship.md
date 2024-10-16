# Starship
[`Starship`](https://starship.rs/) is the shell prompt I use

:::warning
Starship has integration for tools like `node` and `git`. This is good aesthetically but will make the terminal slow on lower-end devices or large repos!!!

See https://github.com/starship/starship/issues/301
:::
:::warning
Starship uses `libgit2` for integration with `git`, and will not work if a custom version of `git` is required.
:::

## Prerequisites
- [Rust](./rust.md)
- [dotbin](./dotbin.md) - For Coreutils on Windows
- Make sure PowerShell 7 is also setup for installation on Windows

## Install
```bash
cargo install starship
```

## Configuration
- Windows:
    - Download the configuration file
        ```powershell
        mkdir -p $env:USERPROFILE\.config
        rm -f $env:USERPROFILE\.config\starship.toml
        iwr https://vmsetup.pistonite.org/home/.config/starship.toml -OutFile $env:USERPROFILE\.config\starship.toml
        ```
    - Open the PowerShell profile
        ```powershell
        notepad $Profile
        ```
    - Add the following
        ```powershell
        # Starship
        Invoke-Expression (&starship init powershell)
        ```
- Linux:
    - Download the configuration file
        ```bash
        mkdir -p ~/.config
        rm -f ~/.config/starship.toml
        curl -o ~/.config/starship.toml https://vmsetup.pistonite.org/home/.config/starship.toml
        ```
    - Add the following to `~/.bashrc`
        ```bash
        # Starship
        eval "$(starship init bash)"
        ```
:::info
Restart the terminal and you should see the starship prompt.
:::