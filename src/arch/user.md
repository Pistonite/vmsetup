# Configure User
This page is partially adopted from https://wiki.archlinux.org/title/General_recommendations

## Add non-root user
We will be adding a non-root user. The example uses `piston` as the name.

Run
```bash
useradd -m -G wheel -s /bin/bash piston
```
:::tip
`-m` will create `/home/piston`. `-G` will add the user to the `wheel` group, which is used for sudo access.
:::
:::tip
If you want to use a different shell, change the `-s` flag. The shell needs to be listed in `/etc/shells`. See https://wiki.archlinux.org/title/Users_and_groups#Example_adding_a_user for more defailts.
:::

Then set the password for the new user with
```bash
passwd piston
```

## Adding the `wheel` group to sudoer
Run
```bash
EDITOR=nvim visudo
```
Search for `wheel` and uncomment this line
```
%wheel ALL=(ALL) ALL
```

## Connecting to the internet
If you are using Ethernet or VM, the machine should already have internet access.

For Wi-Fi:
```bash
nmcli device wifi connect <SSID> --ask
```
Verify connection:

```bash
ip address
ping archlinux.org
```
:::warning
The IP address of the system might change after reboot if DHCP is used, since the hostname changed.
Note the new IP address in the output of `ip address`
:::

## Enabling SSH
Run
```bash
systemctl enable sshd
systemctl start sshd
```

SSH into the VM with your new user, replace `<IP>` with the IP address of the VM
```bash
ssh piston@<IP>
```
:::warning
Your IP address might have changed. Run `ip address` to get it again
:::
:::tip
If you can't login, make sure you have a shell set for the user that is listed in `/etc/shells`. For example `/usr/bin/bash` will not work out of the box and you need to use `/bin/bash` instead
:::

### Setting up SSH keys
Generate a SSH key on the machine you are connecting from
```bash
ssh-keygen -t ed25519
```
:::tip
`ssh-keygen` is also shipped in Windows with OpenSSH!

For Hyper-V VM, name the key the same as the VM name so you can use
my [`dotbin`](../tool/dotbin.md) utility for seamless login.
See [here](../hyperv/connect.md) for more details

For local VM, passphrase is not needed since it slows down login. 
Recommended for physical machines and set it the same as your user password.
:::

Store the public key to the VM
```bash
cat path/to/key.pub | ssh piston@<IP> "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```
:::tip
Credit to https://chrisjhart.com/Windows-10-ssh-copy-id/ for the powershell command.

On Linux, you can also use
```bash
ssh-copy-id -i path/to/key.pub piston@<IP>
```
:::

Now you can ssh into the VM with the key
```bash
ssh -i <path/to/key> piston@<IP>
```
:::tip
For Hyper-V, with [`dotbin`](../tool/dotbin.md) configured, try `evm <vmname>`
:::

## Hardening SSH Security
With SSH enabled, we need to be extra secure to make sure no one can access our machine.

On your target machine/VM, edit `/etc/ssh/sshd_config`
```bash
sudo nvim /etc/ssh/sshd_config
```

Disallow root SSH login. (Search for `PermitRootLogin` and change it to `no`)
```
PermitRootLogin no
```

Disallow password login (SSH key required). Search for `PasswordAuthentication`
```
PasswordAuthentication no
PermitEmptyPasswords no
```

Use only one internet protocol if you only need one of IPv4 or IPv6. Search for `AddressFamily`
```
AddressFamily inet
```
:::tip
Change `inet` to `inet6` for IPv6 only
:::

Save and exit `nvim`, then restart the SSH service
```bash
sudo systemctl restart sshd
```
:::warning
If service restart fails, check everything is typed correctly
:::

Logout with `logout` or Ctrl-D, and try to login with password. It should fail.
```bash
ssh piston@<IP>
```

## Firewall
Setting up firewall is recommended for mobile machines or VMs on mobile machines,
since they will be exposed to public networks (when traveling, etc).
:::tip
See https://wiki.archlinux.org/title/Firewalld for more details
:::

First install `firewalld`, enable and start the service
```bash
sudo pacman -S firewalld
sudo systemctl enable firewalld
sudo systemctl start firewalld
```

Check that you are connected to your network interface
```bash
ip address
```

The default zone should be `public` - that should also be the zone that's active right now
```bash
sudo firewall-cmd --get-default-zone
sudo firewall-cmd --get-active-zone
```
You should see your interface listed under `public`

We will first disable SSH in the `public` zone
```bash
sudo firewall-cmd --zone=public --remove-service ssh --permanent
```

Now, you should no longer be able to SSH into the machine.

Then, move the network connection to the `home` zone
```bash
sudo nmcli connection modify <SSID> connection.zone home
```

You should be able to SSH into the machine again. 
Verify that the default zone is still `public` and the active zone is now `home`
```bash
sudo firewall-cmd --get-default-zone
sudo firewall-cmd --get-active-zone
```
Now if you are connected to public Wi-Fi, SSH service will be disabled automatically.



