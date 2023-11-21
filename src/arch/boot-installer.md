# Boot Installer

## Booting from the ISO
1. Once again open Hyper-V Manager.
2. Select your VM, and click `Settings`
3. Select `SCSI Controller` on the left
4. Add a `DVD Drive`
5. Select `Image file`, and choose the location of the `.iso` image you just downloaded
6. Click `Apply`
7. Go to `Firmware`
8. Make the boot order `Hard Drive` first, and `DVD Drive` second, and the rest in the bottom
9. Click `OK` to close the settings
10. Start your VM and click `Connect`
11. You should see the boot menu
:::warning
If you don't see anything, double check that you have `Secure Boot` disabled
:::
12. Select `Arch Linux install medium (x86_64, UEFI)`, should be the first option
13. Wait until you see the command prompt like
```
root@archiso ~ #
```

## Verify internet connection
1. Run `ip address`
2. You should see an local address starting with `192.168` indicating that your VM is connected to your local network. If not, you might need to change the network adapter the external virtual switch is connecting to.
3. Run `ping archlinux.org` to verify connection
4. Ctrl-C to stop pinging

## Setup SSH
1. Run `passwd` to set the root password
:::tip
This will not be the root password for the OS you are installing. This is the root password for the live environment. Type something simple like `change` so you can type it quickly.
:::
2. Inside Powershell, ssh to the VM. Replace `<ip-address>` with the IP address you got from `ip address`
```
ssh root@<ip-address>
```
3. Enter the password you just set
4. You should now see the same prompt
