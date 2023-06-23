# Configure Boot Loader
We will be using `systemd-boot` as the boot loader. See https://wiki.archlinux.org/title/Arch_boot_process#Boot_loader for all options.

This page is partially adopted from https://wiki.archlinux.org/title/Systemd-boot

## Install Boot Loader
First ensure the system is in UEFI mode with
```
ls /sys/firmware/efi/efivars
```
The command should not error.

Assuming you have been following this guide, the ESP mount point should be `/boot` (chrooted into the system i.e. `/mnt`)

Install the boot loader with
```
bootctl install
```
:::tip
This will automatically search for `/efi`. `/boot` and `/boot/efi`. If you are using a different mount point, you need to set `--esp-path=/path/to/esp`
:::

## Configure Loader
Create `/boot/loader/loader.conf` with the following content
```
default      arch.conf
timeout      3
console-mode max
editor       yes
```
:::warning
Use space for indent. Tabs won't work.
:::
:::tip
We have `editor yes` in case something goes wrong, we can edit the boot loader
:::
:::tip
Change `timeout 3` to a longer timeout if you need longer to select in the boot menu
:::

Also run `blkid /dev/sda3` to get the UUID of the root partition. We will need it later.

Next we will add 2 loader entries for `arch` and `arch-lts`.

### arch
Create `/boot/loader/entries/arch.conf` with the following content. Replace the UUID with the one you got from `blkid`
```
title   Arch Linux
linux   /vmlinuz-linux
initrd  /amd-ucode.img
initrd  /initramfs-linux.img
options root="UUID=d71c6c2a-2731-4825-b4c6-e25ab1fd451b" rw 
```
:::warning
Replace `amd-ucode` with `intel-ucode` if you have intel CPU
:::

### arch-lts
Run this to clone the `arch` entry to `arch-lts`
```
cp /boot/loader/entries/arch.conf /boot/loader/entries/arch-lts.conf
```
Edit `/boot/loader/entries/arch-lts.conf` and replace:
- `Arch Linux` with `Arch Linux LTS`
- `/vmlinuz-linux` with `/vmlinuz-linux-lts`
- `/initramfs-linux.img` with `/initramfs-linux-lts.img`

:::warning
Check you have `intel-ucode` instead of `amd-ucode` if you have intel CPU
:::

It should look like this
```
title   Arch Linux LTS
linux   /vmlinuz-linux-lts
initrd  /amd-ucode.img
initrd  /initramfs-linux-lts.img
options root="UUID=d71c6c2a-2731-4825-b4c6-e25ab1fd451b" rw
```

## Reboot
Exit the chroot environment by pressing `Ctrl+D` or running
```
exit
```
Then unmount all partitions
```
umount -R /mnt
```
Exit the SSH environment by pressing `Ctrl+D` or running
```
logout
```

Now, go to Hyper-V Manager:
1. Click on `Shut Down...` to shut down the VM.
2. Open `Settings...` and select `DVD Drive` under `SCSI Controller`.
3. Click `Remove` on the right to remove the installation ISO
4. Click `OK` to save the settings.
5. Press `Start` to start the VM. Then press `Connect...` to connect to the VM.

In the login screen, type `root` for the login, then type the root password you just set (not the one you set intiaially for the live environment).

You should see the prompt if you login successfully. `pistonite` would be your hostname.
```
[root@pistonite ~]#
```

## Boot LTS
We will now make sure the LTS kernel can also boot.

1. Go to Hyper-V Manager and click `Shut Down...` to shut down the VM.
:::tip
You don't need to close the VM connection, we will be reusing it.
:::
2. Click `Start` in the VM connection window. Press down in the boot menu to prevent the default boot.
3. Select `Arch Linux LTS` and press `Enter` to boot.

You should be able to login the same way as above.

## Disable Editing
Now that we have confirmed both kernels can boot, we will disable editing the boot loader.

Run
```
nvim /boot/loader/loader.conf
```
and change `editor yes` to `editor no`.
