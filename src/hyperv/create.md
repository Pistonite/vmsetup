# Creating VM

This guide is partially adopted from https://wiki.archlinux.org/title/Hyper-V

## Creating a VM
1. Open Hyper-V Manager
2. Under `Actions` on the right, click `New` > `Virtual Machine...`
3. If you see `Before You Begin`, click `Next`
4. Enter a name for the VM. I will use `Pistonite` as example. click `Next`
::: tip
If needed, change the location of the VM. For example `F:\VirtualMachines`
:::
5. Choose `Generation 2`. Click `Next`
6. For start up memory. I will put `8192MB`. Probably enable dynamic memory. Click `Next`
::: tip
Arch Linux wiki says "choose enough to ensure Arch and any programs will run properly."
:::
7. Leave `Connection` alone as we will do this later.
8. Select a size for the virtual hard disk. I will put `256GB`. Click `Next`
9. Select `Install an operating system later`. CLick `Next`
10. Click `Finish`

Conguratulations! You have created a VM!