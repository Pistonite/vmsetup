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
Then download the configuration (Same command for Windows, with `dotbin`)
```bash
mkdir -p ~/.config
rm -f ~/.config/starship.toml
curl -o ~/.config/starship.toml https://vmsetup.pistonite.org/home/.config/starship.toml
```

## Shell
- Windows:
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
    - Add the following to `~/.bashrc`
        ```bash
        # Starship
        eval "$(starship init bash)"
        ```
:::info
Restart the terminal and you should see the starship prompt.
:::