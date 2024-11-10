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
- [dotbin](./dotbin.md)
- Make sure PowerShell 7 is also setup for installation on Windows

## Install
```bash
cargo install starship
```
Then use `dotbin` to configure it
```bash
dotbin-cfg starship
```
:::tip
`dotbin-cfg starship -h` to see custom config options
:::

## Shell
- Windows:
    - Open the PowerShell profile
        ```powershell
        vipwsh
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

## Windows Defender
Run as admin and add the following to the Windows Defender exclusions
for faster startup
```powershell
Add-MpPreference -ExclusionProcess starship
```
