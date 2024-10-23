# Getting Started

Install a Desktop Environment (DE) if you are using a graphical display.

## Fonts
Install `noto-fonts` provided by Google
```bash
sudo pacman -S noto-fonts noto-fonts-emoji noto-fonts-cjk noto-fonts-extra
```

## Plasma
We will install KDE Plasma, which is a full-featured DE, with some
extra tools
```bash
sudo pacman -S plasma-meta kde-system-meta kde-utilities-meta
```
:::tip
You can choose providers for some packages, for example, `qt6` and `jack`.
My choices are:
- `qt6-multimedia-ffmpeg`
- `pipewire-jack`
:::

## Display Manager
After installation is done, enable the Display Manager `sddm`
```bash
sudo systemctl enable sddm
```
Reboot and you should see graphical login
```bash
reboot
```
