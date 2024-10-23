# Essential Tools
We will make sure some environment and tools work before installing anything else.
:::warning
This can be skipped for production environment,
as the guide makes sure everything is installed with one command
:::

## Other utilities
Just make sure we have these, since other tools/projects might need them without asking
```bash
sudo pacman -Syu zip unzip wget gzip
```

## Bash Profile
Open `~/.bashrc` and replace the content with the following
```bash
#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return
# Quick config shortcuts
alias vibash='nvim ~/.bashrc'
alias vinvim='nvim ~/.config/nvim/'

export EDITOR='nvim'

# Temporary
PS1='[\u@\h \W]\$ '
```
:::tip
For VM, add an extra line
```bash
export HOST_MACHINE_IP="192.168.0.xxx"
```
Replace the IP with the host machine's IP address. This is used for copying
from Neovim to the host machine with the `wsclip` utility from `dotbin`
:::

## Essential & Dotbin
Now, proceed to [Essential Tools](../tool/index.md) and install everything there.


## yay
`yay` is an AUR helper that helps with installing stuff from AUR.
Since `yay` is itself an AUR package, we will need to install it from source.

First install `go` so we can build it
```bash
sudo pacman -S go
```

Then clone the `yay` repo and build it
```bash
git clone https://aur.archlinux.org/yay.git ~/yay
cd ~/yay
makepkg -si
```

Make sure it is setup correctly, then remove the source
```bash
yay --version
cd ~
rm -rf ~/yay
```
:::tip
Unlike `pacman`, when using `yay` to install, you do not need to run it with `sudo`
:::
