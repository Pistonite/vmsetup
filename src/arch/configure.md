# Configure the System
This is 3.1-3.7 from https://wiki.archlinux.org/title/Installation_guide

## Fstab
Run
```
genfstab -U /mnt >> /mnt/etc/fstab
```

## Chroot to system
This will change the root from the live environment to the system we just installed
```
arch-chroot /mnt
```

## Set time zone
Run this to list all time zone regions
```
ls /usr/share/zoneinfo
```

Select the region, the run
```
ls /usr/share/zoneinfo/<Region>
```

to see available time zones in that region. Select the time zone you want, then run
```
ln -sf /usr/share/zoneinfo/<Region>/<Zone> /etc/localtime
```

Then run this to generate `/etc/adjtime`
```
hwclock --systohc
```

## Localization
Edit `/etc/locale.gen` with `nvim /etc/local.gen` and uncomment `en_US.UTF-8 UTF-8`.

Since this is a headless environment. I only need this locale. Uncomment other locales if you need

Run this to generate the locales
```
local-gen
```

Then edit `/etc/locale.conf` with `nvim /etc/locale.conf` and add this line
```
LANG=en_US.UTF-8
```

If you changed keyboard layout, edit `/etc/vconsole.conf` with `nvim /etc/vconsole.conf` and add this line (see https://wiki.archlinux.org/title/Installation_guide#Localization)
```
KEYMAP=<Layout>
```

## Network
Create the host name file with `nvim /etc/hostname` and add your host name (`pistonite` in my case)

Or just 
```
echo <Hostname> > /etc/hostname
```

Finally enable network manager with
```
systemctl enable NetworkManager
```

## Initramfs
Usually this should be optional but run this anyway
```
mkinitcpio -P
```
See https://wiki.archlinux.org/title/Installation_guide#Initramfs for more details

## Root password
Set the root password now with `passwd`. This is the actual root password.

Next we will set up the boot loader, which is the last setup in the OS installation.