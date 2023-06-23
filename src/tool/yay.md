# yay
`yay` is a AUR helper that helps with installing stuff from AUR.

## Clone repo
We do need to install yay from source. Clone the git repo with
```bash
cd ~/dev
git clone https://aur.archlinux.org/yay.git
```

## Build and install
```bash
cd yay
makepkg -si
```

Confirm the installation by running
```bash
yay --version
```
:::tip
Unlike `pacman`, when using `yay` to install, you do not need to run it with `sudo`
:::

## Remove repo
You can delete the repo afterwards if you have no use of it
```bash
cd ~/dev
rm -rf yay
```