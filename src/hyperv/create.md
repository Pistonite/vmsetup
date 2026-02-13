# Creating VM
1. Open Hyper-V Manager
2. Under `Actions` on the right, click `New` > `Virtual Machine...`
3. If you see `Before You Begin`, click `Next`
4. Enter a name for the VM. I will use `Pistonite` as example. click `Next`
    ```admonish tip
    If needed, change the location of the VM. For example `F:\VirtualMachines`
    ```
    ```admonish warning
    The name is case-insensitive. For the best experience with my scripts,
    don't include spaces in the name
    ```
5. Choose `Generation 2`. Click `Next`
6. For start up memory. I will put `8192MB`. Probably enable dynamic memory. Click `Next`
    ```admonish tip
    Arch Linux wiki says "choose enough to ensure Arch and any programs will run properly."
    ```
7. Leave `Connection` alone as we will do this later.
8. Select a size for the virtual hard disk. I will put `256GB`. Click `Next`
9. Select `Install an operating system later`. Click `Next`
10. Click `Finish`

Conguratulations! You have created a VM!

# Virtual Switch
We need a virtual switch so the VM can connect to the internet.

We will use `External Switch` so the VM is connected directly to the local network.


```admonish info
Steps below are partially adopted from [https://wiki.archlinux.org/title/Hyper-V#External_switch](https://wiki.archlinux.org/title/Hyper-V#External_switch)
```

1. Open Hyper-V Manager
2. Under `Actions` on the right, click `Virtual Switch Manager...`
3. Under `Virtual Switches` on the left, make sure `New virtual network switch` is selected.
4. On the right, select `External` and click `Create Virtual Switch`.
5. Enter a name for the switch. I will use `External Virtual Switch` as example.
6. Select the network adapter your Host OS uses.
    ```admonish tip
    If you are not sure which one to select. Select any one for now. If you can't connect to the internet in the VM later, try another one.
    ```
7. Check `Allow management operating system to share this network adapter`. Click `OK`.

Conguratulations! You have created a virtual switch!
