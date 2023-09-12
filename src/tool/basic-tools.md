# Basic Tools
We will install a flurry of basic tools.

## yay
`yay` is an AUR helper that helps with installing stuff from AUR. Since `yay` is itself an AUR package, we will need to install it from source.
```bash
cd ~
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si # Run yay --version after this to confirm successful install
cd ..
rm -rf yay
```
:::tip
Unlike `pacman`, when using `yay` to install, you do not need to run it with `sudo`
:::


## Rust
We will install [Rust](https://rustup.rs/) as the first thing, so we can install some additional tools with `cargo`.

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Enter `1` and hit Enter to install to the default locations

After install, load the environment with
```bash
source ~/.cargo/env
```

## Oxidize
Time to install more stuff with `cargo`. I will provide the configuration files later, so for now we can just install them.
```bash
cargo install exa bat cargo-info cargo-watch just du-dust ripgrep fd-find starship zoxide websocat
```
Explanation of each package:

| Package | Description | Link |
|-|-|-|
| `exa` | `ls` but better | https://github.com/ogham/exa |
| `bat` | `cat` with wings | https://github.com/sharkdp/bat |
| `cargo-info` | Cargo command for getting info about crates, and most usefully, feature flags | https://gitlab.com/imp/cargo-info |
| `cargo-watch` | Cargo command for running command in watch mode | https://github.com/watchexec/cargo-watch |
| `just` | Simple command runner | https://github.com/casey/just |
| `du-dust` | Replacement for `du` | https://github.com/bootandy/dust |
| `starship` | Shell prompt | https://starship.rs/ |
| `zoxide` | Directory jumper | https://github.com/ajeetdsouza/zoxide |
| `ripgrep` | Search tool (telescope.nvim requires it) | https://github.com/BurntSushi/ripgrep |
| `fd-find` | File find tool (telescope.nvim requires it) | https://github.com/sharkdp/fd |
| `websocat` | Websocket client CLI | https://github.com/vi/websocat |

## Next Steps
Next we will install tools that require change to `.bashrc`, so
we can install them all first and copy the `.bashrc` directly afterward.
