```admonish info
This section is 1.4-1.7 of the [Arch Linux Installation Guide](https://wiki.archlinux.org/title/Installation_guide).
```

```admonish warning
Make sure Secure Boot is disabled when booting the install medium.

For Hyper-V, see [Configuration](../hyperv/configure.md#disable-secure-boot).
For physical machines, see the manufacturer's documentation.

Secure Boot is unnecessary for VM. For physical machines, I don't use it.
It can be enabled later if needed.
```


## Boot Install Image - Hyper-V

1. Open Hyper-V Manager.
2. Select your VM, and click `Settings`
3. Select `SCSI Controller` on the left
4. Add a `DVD Drive`
5. Select `Image file`, and choose the location of the `.iso` image you just downloaded
6. Click `Apply`
7. Go to `Firmware`
8. Make the boot order `Hard Drive` first, and `DVD Drive` second, and the rest in the bottom
9. Click `OK` to close the settings
10. Start your VM and click `Connect`
11. You should see a boot menu

```admonish warning
If you don't see anything, double check that you have `Secure Boot` disabled
```

## Boot Install Image - Physical Machine
With Secure Boot disabled, insert the bootable USB and boot from it.
Refer to the device manufacturer's documentation.
You should see a boot menu.

## Enter the Install Medium
Select `Arch Linux install medium (x86_64, UEFI)`, which should be the first option.
(It will be auto selected after a timer count down).

Then, Wait until you see the command prompt like
```
root@archiso ~ #
```

## Connect to Wi-Fi
```admonish tip
If Ethernet connection is available, use that, it will automatically work.
For Hyper-V, make sure the external virtual switch is connected to the correct network adapter. See [here](../hyperv/create.md#virtual-switch)

The steps below are only needed for connecting through Wi-Fi
```

To connect to internet using Wi-Fi, run
```
iwctl
```
List the Wi-Fi devices
```
device list
```

~~~admonish warning
We will assume the Wi-Fi device is `wlan0`. See the output of `device list` to confirm the device name.
If the device is powered off, turn it on
```
device wlan0 set-property Powered on
```
~~~

Then, initiate a scan (note there will be no output) and list available networks
```
station wlan0 scan
station wlan0 get-networks
```

To connect to a network, run the following, and type in the password.
```
station wlan0 connect <SSID>
```

Then, exit by
```
quit
```

## Verify internet connection

First verify that your machine is connected to the local network
```bash
ip address
```
You should see an local address starting with `192.168` indicating that the machine is connected to your local network.
```admonish tip
For Hyper-V, if the connection is not working, you might need to change the network adapter the external virtual switch is connecting to.
```

Then, verify you have internet connection
```bash
ping archlinux.org
```
Press `Ctrl-C` to stop pinging

## Setup SSH
With SSH, we can install the system from the device you are reading this guide on.
So you can copy and paste commands from this guide to the terminal.

Run `passwd` to set a short, temporary password - `change`
```admonish tip
This will not be the root password for the OS you are installing. This is the root password for the live environment. Type something simple like `change` so you can type it quickly.
```

Then, on the host system, run: (Replace `<ip-address>` with the IP address you got from `ip address`)
```
ssh root@<ip-address>
```

Enter the password you just set, and you should now see the same prompt
```
root@archiso ~ #
```

```admonish warning
Keep your new machine/VM running!
```
