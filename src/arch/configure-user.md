```admonish info
This page is partially adopted from 
[https://wiki.archlinux.org/title/General_recommendations](https://wiki.archlinux.org/title/General_recommendations)
```

## Add non-root user
We will be adding a non-root user. The example uses `piston` as the name.

Run
```bash
useradd -m -G wheel -s /bin/bash piston
```
```admonish tip
`-m` will create `/home/piston`. `-G` will add the user to the `wheel` group, which is used for sudo access.

If you want to use a different shell, change the `-s` flag. The shell needs to be listed in `/etc/shells`. See https://wiki.archlinux.org/title/Users_and_groups#Example_adding_a_user for more defailts.
```

Then set the password for the new user with
```bash
passwd piston
```

## Adding the `wheel` group to sudoer
Run
```bash
EDITOR=vim visudo
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

```admonish warning
The IP address of the system might change after reboot if DHCP is used, since the hostname changed.
Note the new IP address in the output of `ip address`
```

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
```admonish warning
Your IP address might have changed. Run `ip address` to get it again

If you can't login, make sure you have a shell set for the user that is listed in `/etc/shells`. For example `/usr/bin/bash` will not work out of the box and you need to use `/bin/bash` instead
```

## Setting up SSH keys
Generate a SSH key on the machine you are connecting from
```bash
ssh-keygen -t ed25519
```

Store the public key to the VM
```bash
cat path/to/key.pub | ssh piston@<IP> "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

~~~admonish tip
Credit to https://chrisjhart.com/Windows-10-ssh-copy-id/ for the powershell command.

On Linux, you can also use
```bash
ssh-copy-id -i path/to/key.pub piston@<IP>
```
~~~

Now you can ssh into the VM with the key
```bash
ssh -i <path/to/key> piston@<IP>
```

## SSH Config (Optional)

Then you can create `.ssh/config` like this
```
Host pistonite
    HostName <IP or Host>
    User piston
    IdentityFile path/to/key
```

If you edit `hosts` file, you can put the name of the host in `.ssh/config`
to be resolved.

## Hardening SSH Security
With SSH enabled, we need to be extra secure to make sure no one can access our machine.

On your target machine/VM, edit `/etc/ssh/sshd_config`
```bash
sudo vim /etc/ssh/sshd_config
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
```admonish tip
Change `inet` to `inet6` for IPv6 only
```

Save and exit `vim`, then restart the SSH service
```bash
sudo systemctl restart sshd
```
```admonish warning
If service restart fails, check everything is typed correctly
```

Logout with `logout` or Ctrl-D, and try to login with password. It should fail.
```bash
ssh piston@<IP>
```

## Firewall
Setting up firewall is recommended for mobile machines or VMs on mobile machines,
since they will be exposed to public networks (when traveling, etc).

```admonish info
See https://wiki.archlinux.org/title/Firewalld for more details
```

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



