# Starship
[`Starship`](https://starship.rs/) is the shell prompt I use

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