# Connect to a VM

`dotbin` has some scripts for interacting with the VMs

## `svm`

`svm.ps1` is a `dotbin` script for starting a Hyper-V machine
from a stopped state, and will escalate to admin automatically with `sudo`

```powershell
svm pistonite
```

:::warning
The name here is the name when you create the VM. You can check in Hyper-V Manager
:::

## `evm`

`evm.ps1` is a `dotbin` script for entering a Hyper-V machine.

First, you need to set up an SSH key for the VM, and save the private
key at `~/.ssh/<vmname>`

Next, configure `hosts` so the VM name can be resolved
```powershell
sudo notepad C:\Windows\System32\drivers\etc\hosts
```

Add the following lines, replacing the IP address and name with the IP
address of your VM, and the VM name
```
# Hyper-V
192.168.0.4 pistonite
```

Finally, setup the environment variable `VMUSER` to the default user
to use when using `ssh`. This should already be done as part of the
[`Windows Environment`](../windows/env.md) setup.

:::tip
Alternatively, `evm <vmname> <user>` can be used to specify the user
:::

After everything is setup, you can login to the VM seamlessly from
a PowerShell session
```powershell
evm pistonite
```
