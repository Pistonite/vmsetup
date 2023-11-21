# Install Essential Packages
This is 2.1-2.2 of https://wiki.archlinux.org/title/Installation_guide

## (Optional) Select the mirrors
The mirrors are usually set up correctly by default. If you want to change them, see https://wiki.archlinux.org/title/Installation_guide#Select_the_mirrors

## Install essential packages
Run `pacstrap` to install the base packages. The command below shows my list of packages. You can add or remove as you like.
### For AMD CPU:
```
pacstrap -K /mnt base pacman-contrib base-devel linux linux-lts linux-firmware linux-headers linux-lts-headers dkms amd-ucode git neovim fzf htop lsof openssh sudo networkmanager curl wget zip unzip man-db man-pages texinfo
```

### For Intel CPU:
```
pacstrap -K /mnt base pacman-contrib base-devel linux linux-lts linux-firmware linux-headers linux-lts-headers dkms intel-ucode git neovim fzf htop lsof openssh sudo networkmanager curl wget zip unzip man-db man-pages texinfo
```

### Details

| Package | Description |
|-|-|
|`base`|This is the most important meta package that includes a minimal set of things you need, like `glibc`, `bash` and `pacman` (the package manager)|
|`pacman-contrib`|Contains utilities for updating mirror list for `pacman`|
|`base-devel`| Meta package for building packages from source. Includes things like `make` and `gcc`.|
|`linux` and `linux-lts`|The kernel and the Long-Term Support (LTS) kernel|
|`linux-firmware`|Firmware stuff I don't understand that you should probably get|
|`linux-headers` and `linux-lts-headers`|Headers for the kernel and the LTS kernel. In case you have stuff to link with the kernel|
|`dkms`|Dynamic Kernel Module Support. In case you have kernel modules that need to be recompiled when the kernel is updated|
|`amd-ucode` or `intel-ucode`|Microcode for AMD or Intel CPUs. See https://wiki.archlinux.org/title/Microcode for more info|
|`git`|Version control system. You probably need this|
|`cmake`|Build system. Need this for some of the tools we install later|
|`neovim`|Text editor we will use in the headless environment|
|`fzf`|Fuzzy finder|
|`htop`|Like `top` or task manager|
|`lsof`|Shows what files are opened by what process|
|`openssh`|SSH server|
|`sudo`|You probably need this|
|`networkmanager`|Network manager|
|`curl` and `wget`|Download stuff|
|`zip` and `unzip`|For compressing and decompressing zip files|
|`man-db`, `man-pages` and `texinfo` |Manual pages|

:::tip
There's no shell because `bash` is included in `base`. If you prefer another shell like `zsh`, include it
:::

