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
git clone https://aur.archlinux.org/yay.git ~/yay
cd ~/yay
makepkg -si # Run yay --version after this to confirm successful install
rm -rf ~/yay
```
:::tip
Unlike `pacman`, when using `yay` to install, you do not need to run it with `sudo`
:::

## Oxidize

Explanation of each package:


| `zoxide` | Directory jumper | https://github.com/ajeetdsouza/zoxide |