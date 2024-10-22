# Install Essential Packages
This section is 2.1-2.2 of the [Arch Linux Installation Guide](https://wiki.archlinux.org/title/Installation_guide).

## Update mirrorlist
Run the following
```bash
reflector --protocol https --latest 20 --sort rate --save /etc/pacman.d/mirrorlist
```

## Install essential packages
:::warning
We are using `pacstrap` to install packages onto the target system, not the live environment.
:::
### Details

| Package | Description |
|-|-|
|`base`|This is the most important meta package that includes a minimal set of things you need, like `glibc`, `bash` and `pacman` (the package manager)|
|`reflector`|Utility for updating mirrorlist for `pacman`|
|`base-devel`| Meta package for building packages from source. Includes things like `make` and `gcc`.|
|`linux` and `linux-lts`|The kernel and the Long-Term Support (LTS) kernel|
|`linux-firmware`|Firmware stuff I don't understand that you should probably get|
|`linux-headers` and `linux-lts-headers`|Headers for the kernel and the LTS kernel. In case you have stuff to link with the kernel|
|`dkms`|Dynamic Kernel Module Support. In case you have kernel modules that need to be recompiled when the kernel is updated|
|`amd-ucode` or `intel-ucode`|Microcode for AMD or Intel CPUs. See https://wiki.archlinux.org/title/Microcode for more info|
|`git`|Version control system. You probably need this|
|`neovim`|For editing files in the install process|
|`openssh`|SSH server|
|`sudo`|You probably need this|
|`networkmanager`|Network manager. The device needs to connect to internet|
|`curl`|In case anything needs to be downloaded during the install|
|`man-db`, `man-pages` and `texinfo` |Manual pages|

:::tip
There's no shell because `bash` is included in `base`. If you prefer another shell like `zsh`, include it
:::

### For AMD CPU:
```bash
pacstrap -K /mnt base reflector base-devel linux linux-lts linux-firmware linux-headers linux-lts-headers dkms amd-ucode git neovim openssh sudo networkmanager curl man-db man-pages texinfo
```

### For Intel CPU:
```bash
pacstrap -K /mnt base reflector base-devel linux linux-lts linux-firmware linux-headers linux-lts-headers dkms intel-ucode git neovim openssh sudo networkmanager curl man-db man-pages texinfo
```

