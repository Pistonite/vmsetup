# Security

Have a production breach is bad so we want to have as much security as possible.

## Non-Root User
Follow [here](../arch/user.md#add-non-root-user) to create a non-root
user and add it to the `wheel` group.

## SSH
:::warning
Before preceeding, setup the key for SSH following [here](../arch/user.md#setting-up-ssh-keys),
so you don't get locked out of the machine! Sometimes you need to 
set up the SSH key with the server provider.
:::

Login to the server with the non-root user and the SSH key, then,
follow [here](../arch/user.md#hardening-ssh-security) to edit the SSH config.
Restart the `sshd` service afterward.

## Firewall
You should use the server provider's service to configure firewall for the VM.

My firewall configuration is basically:
- Allow inbound TCP on port 22, from my IP
- Allow only inbound TCP on port 443 from Cloudflare IPs
- Allow outbound TCP/UDP to port 53 (for DNS) for all IPs
- Allow outbound TCP to port 80, 443 for all IPs
- Drop all other traffic
:::tip
The ports specified above for outbound rules are port on the remote machine
(not the port of my machine)
:::
