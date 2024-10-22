# Configure Boot Loader
:::tip
We will be using `systemd-boot` as the boot loader. See https://wiki.archlinux.org/title/Arch_boot_process#Boot_loader for all options.
:::

This page is partially adopted from https://wiki.archlinux.org/title/Systemd-boot

## Install Boot Loader
:::tip
Ensure the system is in UEFI mode with
```bash
ls /sys/firmware/efi/efivars
```
The command should not error.
:::

Assuming you have been following this guide, the ESP mount point should be `/boot` (chrooted into the system i.e. `/mnt`)

Install the boot loader with
```bash
bootctl install
```
:::tip
This will automatically search for `/efi`. `/boot` and `/boot/efi`. If you are using a different mount point, you need to set `--esp-path=/path/to/esp`
:::
:::warning
You might see a warning like this
```
Mount point '/boot' which backs the random seed file is world accessible, which is a security hole!
```
We will make sure the permissions are correct later, as for now we still
need to edit the loader
:::

## Configure Loader
Create `/boot/loader/loader.conf` with
```bash
nvim /boot/loader/loader.conf
```
Paste in the following content
```
default      arch.conf
timeout      1
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
Change `timeout 1` to a longer timeout if you need longer to select in the boot menu
:::
Save with the following in `nvim` so parent directories are created if they don't exist
```
:w ++p
```

Next run the following to get the UUID of the root partition. Replace `/dev/sda3`
with the root partition device (`fdisk -l` to list them if you need)
```bash
blkid /dev/sda3
```
:::warning
Make sure the label is `root` (or whatever it was when you created the partigion).
Copy the output somewhere and we will need it later.
:::

Next we will add 2 loader entries for `arch` and `arch-lts`.

### arch
Create `/boot/loader/entries/arch.conf`
```bash
nvim /boot/loader/entries/arch.conf
```
Paste in the following content. Replace the UUID with the one you got from `blkid`
```
title   Arch Linux
linux   /vmlinuz-linux
initrd  /amd-ucode.img
initrd  /initramfs-linux.img
options root="UUID=d71c6c2a-2731-4825-b4c6-e25ab1fd451b" rw 
```
:::warning
Use `UUID`, not `PARTUUID`!
:::
:::danger
Replace `amd-ucode` with `intel-ucode` if you have intel CPU
:::

### arch-lts
Run this to clone the `arch` entry to `arch-lts`
```bash
cp /boot/loader/entries/arch.conf /boot/loader/entries/arch-lts.conf
```
Edit `/boot/loader/entries/arch-lts.conf`
```bash
nvim /boot/loader/entries/arch-lts.conf
```
And replace:
- `Arch Linux` with `Arch Linux LTS`
- `/vmlinuz-linux` with `/vmlinuz-linux-lts`
- `/initramfs-linux.img` with `/initramfs-linux-lts.img`

:::danger
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
```bash
exit
```
Then unmount all partitions
```bash
umount -R /mnt
```
Exit the SSH environment by pressing `Ctrl+D` or running
```bash
logout
```

Now, shutdown the machine, and remove the installation USB drive.
```bash
shutdown now
```
:::tip
For Hyper-V:
1. Open Hyper-V Manager
2. Click on `Shut Down...` to shut down the VM.
3. Open `Settings...` and select `DVD Drive` under `SCSI Controller`.
4. Click `Remove` on the right to remove the installation ISO
5. Click `OK` to save the settings.
:::

Reboot the machine, type `root` for the login, then type the root password you just set (not the one you set initially for the live environment).
:::tip
For Hyper-V: Press `Start` to start the VM. Then press `Connect...` to connect to the VM.
:::
:::warning
On VM, you should see no errors. On a physical machine, you might see errors due to
missing drivers. This is fine and you can still login if the prompt appears.
:::
You should see the prompt if you login successfully. `pistonite` would be your hostname.
```
[root@pistonite ~]#
```

## Boot LTS
We will now make sure the LTS kernel can also boot.

Reboot the system, then select `Arch Linux LTS` in the boot menu and press `Enter` to boot.
```bash
reboot
```

You should be able to login the same way as above.

## Disable Editing
Now that we have confirmed both kernels can boot, we will disable editing the boot loader.

Run
```bash
nvim /boot/loader/loader.conf
```
and change `editor yes` to `editor no`.

Edit `/etc/fstab` with
```bash
nvim /etc/fstab
```

Change `fmask` and `dmask` value to something like
```
fmask=0077,dmask=0077
```
:::tip
See https://bbs.archlinux.org/viewtopic.php?id=287695
:::

Finally, reboot again to boot into the default kernel.
```bash
reboot
```
