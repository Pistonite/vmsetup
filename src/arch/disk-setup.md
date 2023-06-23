# Disk Setup
This is 1.9-1.11 from https://wiki.archlinux.org/title/Installation_guide

## Find the Virtual Disk
Run `fdisk -l` to list the disks. You should see the virtual disk like this
```
Disk /dev/sda: 256 GiB, 274877906944 bytes, 536870912 sectors
Disk model: Virtual Disk
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
```

In this guide, we will setup the EFI partition, a swap partition, and a root partition. You can setup more partitions if you want.

## Create the partitions
We will have:
1. 1GB for the EFI partitions, for 2 kernels we will be installing later
2. 8GB for the swap partition
3. The rest for the root partition

Run `parted -a optimal /dev/sda`. Replace `/dev/sda` with the disk you want to partition. Then do this:
1. `mklabel gpt` to create a GPT partition table
2. `mkpart primary fat32 0% 1GiB` to create the EFI partition
3. `set 1 esp on` to set the EFI partition as the EFI System Partition
4. `mkpart primary 1GiB 9GiB` to create the swap partition of 8GiB (9-1=8)
5. `mkpart primary 9GiB 100%` to create the root partition
6. `print` to make sure everything is OK
```
Number  Start   End     Size    File system  Name     Flags
 1      1049kB  1074MB  1073MB  fat32        primary  boot, esp
 2      1074MB  9664MB  8590MB               primary
 3      9664MB  275GB   265GB                primary
```
7. `quit` to exit parted

## Format the partitions
Run `fdisk -l` again to see the partitions and their labels
```
Disk /dev/sda: 256 GiB, 274877906944 bytes, 536870912 sectors
...

Device        Start       End   Sectors  Size Type
/dev/sda1      2048   2097151   2095104 1023M EFI System
/dev/sda2   2097152  18874367  16777216    8G Linux filesystem
/dev/sda3  18874368 536868863 517994496  247G Linux filesystem
```

Then run
1. `mkfs.vfat -F32 /dev/sda1` to format the EFI partition
:::tip
The difference between `vfat` and `fat` is that `vfat` supports longer file names. Read more here: https://en.wikipedia.org/wiki/File_Allocation_Table. You can also run `mkfs.fat` though.
:::
2. `mkswap -L "swap" /dev/sda2` to format the swap partition and label it `swap`
3. `mkfs.ext4 -L "root" /dev/sda3` to format the root partition and label it `root`
:::tip
Formatting the root partition might be a bit slower than the other partitions
:::

## Mount the file systems
1. Mount the root partition to `/mnt`
    ```
    mount /dev/sda3 /mnt
    ```
2. Mount the EFI partition to `/mnt/boot`
    ```
    mount --mkdir /dev/sda1 /mnt/boot
    ```
3. Enable the swap volume
    ```
    swapon /dev/sda2
    ```