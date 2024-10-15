# Basic Tools
We will install a flurry of basic tools.

## Refresh Mirror List
Here's a script to refresh the mirror list. Save it to `~/bin/updatemirrors`
```bash
#!/usr/bin/bash
which rankmirrors
rm /etc/pacman.d/mirrorlist
curl -s "https://archlinux.org/mirrorlist/?country=US&protocol=https&ip_version=4&ip_version=6&use_mirror_status=on" | sed -e 's/^#Server/Server/' -e '/^#/d' | rankmirrors -n 10 - > /etc/pacman.d/mirrorlist
```
Then make it executable
```bash
chmod +x ~/bin/updatemirrors
```
Run `sudo updatemirrors` to update the mirrors when needed

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

## Oxidize
Time to install more stuff with `cargo`. I will provide the configuration files later, so for now we can just install them.
```bash
cargo install exa bat cargo-info cargo-watch du-dust ripgrep fd-find zoxide websocat
```
Explanation of each package:

| Package | Description | Link |
|-|-|-|
| `eza` | `ls` but better | https://github.com/eza-community/eza |
| `bat` | `cat` with wings | https://github.com/sharkdp/bat |
| `cargo-info` | Cargo command for getting info about crates, and most usefully, feature flags | https://gitlab.com/imp/cargo-info |
| `cargo-watch` | Cargo command for running command in watch mode | https://github.com/watchexec/cargo-watch |
| `du-dust` | Replacement for `du` | https://github.com/bootandy/dust |
| `zoxide` | Directory jumper | https://github.com/ajeetdsouza/zoxide |
| `ripgrep` | Search tool (telescope.nvim requires it) | https://github.com/BurntSushi/ripgrep |
| `fd-find` | File find tool (telescope.nvim requires it) | https://github.com/sharkdp/fd |
| `websocat` | Websocket client CLI | https://github.com/vi/websocat |

## Next Steps
Next we will install tools that require change to `.bashrc`, so
we can install them all first and copy the `.bashrc` directly afterward.
