# Configure the System
This is 3.1-3.7 from https://wiki.archlinux.org/title/Installation_guide

## Fstab
Run
```bash
genfstab -U /mnt >> /mnt/etc/fstab
```

## Chroot to system
This will change the root from the live environment to the system we just installed
```bash
arch-chroot /mnt
```

## Set time zone
Run the following to set the time zone. Replace `US/Pacific` with your time zone
```bash
ln -sf /usr/share/zoneinfo/US/Pacific /etc/localtime
```
:::tip
If you don't know what time zones are available, run this to list all time zone regions
```bash
ls /usr/share/zoneinfo
```
Select the region, the run
```bash
ls /usr/share/zoneinfo/<Region>
```
:::

Then run this to generate `/etc/adjtime`
```bash
hwclock --systohc
```

## Localization
Edit `/etc/locale.gen`
```bash
nvim /etc/locale.gen
```
Uncomment the line with `en_US.UTF-8 UTF-8`.
:::tip
Uncomment other locales if you need
:::

Run this to generate the locales
```bash
locale-gen
```

Then config the locale with 
```bash
echo "LANG=en_US.UTF-8" > /etc/locale.conf
```
:::tip
If you changed keyboard layout, edit `/etc/vconsole.conf` with `nvim /etc/vconsole.conf` and add this line (see https://wiki.archlinux.org/title/Installation_guide#Localization)
```
KEYMAP=<Layout>
```
:::


## Network
Create the host name file with the following, replace `pistonite` with the host name you want (i.e. name for your VM)
```bash
echo pistonite > /etc/hostname
```
Then enable network manager with
```bash
systemctl enable NetworkManager
```

## Initramfs
Usually this should be optional but run this anyway
```bash
mkinitcpio -P
```
See https://wiki.archlinux.org/title/Installation_guide#Initramfs for more details

## Root password
Set the root password now. This is the actual root password.
```bash
passwd
```

Next we will set up the boot loader, which is technically the last setup in the OS installation.
We will set up user login after that so we can stop using root login.
