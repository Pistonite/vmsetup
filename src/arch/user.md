# Configure User
This page is partially adopted from https://wiki.archlinux.org/title/General_recommendations

## Add non-root user
We will be adding a non-root user. The example uses `piston` as the name.

Run
```
useradd -m -G wheel -s /bin/bash piston
```
:::tip
`-m` will create `/home/piston`. `-G` will add the user to the `wheel` group, which is used for sudo access.
:::
:::tip
If you want to use a different shell, change the `-s` flag. The shell needs to be listed in `/etc/shells`. See https://wiki.archlinux.org/title/Users_and_groups#Example_adding_a_user for more defailts.
:::

Then set the password for the new user with
```
passwd piston
```

## Adding the `wheel` group to sudoer
Run
```
EDITOR=nvim visudo
```
Search for `wheel` and uncomment this line
```
%wheel ALL=(ALL) ALL
```

## Enabling SSH
Run
```
systemctl enable sshd
systemctl start sshd
```

SSH into the VM with your new user, replace `<IP>` with the IP address of the VM
```
ssh piston@<IP>
```
:::warning
Your IP address might have changed. Run `ip address` to get it again
:::
:::tip
If you can't login, make sure you have a shell set for the user that is listed in `/etc/shells`. For example `/usr/bin/bash` will not work out of the box and you need to use `/bin/bash` instead
:::

### (Optional) SSH Keys
It's more secure to use SSH key for login and disable password login for servers. However, since the VM is on your local computer, it's not really necessary.

If you still like to use SSH keys (for example, in case you type the password on stream accidentally), you can do that.

In Windows Powershell, run
```
ssh-keygen -t ed25519
```
:::tip
Windows use 2048 bit RSA keys by default. We use ed25519 here because it's better
:::
You can change the key location or use the default. Optionally you can setup a passphrase for the key.
:::warning
You might want to change the location if you also have an SSH key for things like GitHub
:::

Then run this in Powershell to copy the public key to the VM
```
type <path\to\key.pub> | ssh piston@<IP> "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```
:::tip
Credit to https://chrisjhart.com/Windows-10-ssh-copy-id/ for the powershell command. If you have WSL, you can simply use
```
ssh-copy-id -i <path/to/key.pub> piston@<IP>
```
:::

Now you can ssh into the VM with the key
```
ssh -i <path/to/key> piston@<IP>
```
:::tip
Save this as an powershell alias for easier access
:::

### Disable password login
With SSH key setup you can disable password login to be extra secure.

1. Login via SSH with your key
2. Edit `/etc/ssh/sshd_config`
    ```
    sudo nvim /etc/ssh/sshd_config
    ```
3. Search for `PasswordAuthentication`. Uncomment the line and change it to `no`
    ```
    PasswordAuthentication no
    ```
4. Save and exit `nvim`
5. Restart the SSH service
    ```
    sudo systemctl restart sshd
    ```
6. Logout with `logout` or Ctrl-D, and try to login with password. It should fail.
    ```
    ssh piston@<IP>
    ```