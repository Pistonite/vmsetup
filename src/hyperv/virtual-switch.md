# Virtual Switch
We need a virtual switch so the VM can connect to the internet.

We will use `External Switch` so the VM is connected directly to the local network.

This page is partially adopted from https://wiki.archlinux.org/title/Hyper-V#External_switch

## Creating a Virtual Switch
1. Open Hyper-V Manager
2. Under `Actions` on the right, click `Virtual Switch Manager...`
3. Under `Virtual Switches` on the left, make sure `New virtual network switch` is selected.
4. On the right, select `External` and click `Create Virtual Switch`.
5. Enter a name for the switch. I will use `External Virtual Switch` as example.
6. Select the network adapter your Host OS uses.
:::tip
If you are not sure which one to select. Select any one for now. If you can't connect to the internet in the VM later, try another one.
:::
7. Check `Allow management operating system to share this network adapter`. Click `OK`.

Conguratulations! You have created a virtual switch!