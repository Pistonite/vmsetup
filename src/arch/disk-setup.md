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

Run the following to enter `parted`. Replace `/dev/sda` with the disk you want to partition.
```bash
parted -a optimal /dev/sda
```
Then do this:
1. Create a GPT partition table
    ```
    mklabel gpt
    ```
2. Create a partition for EFI
    ```
    mkpart primary fat32 0% 1GiB
    ```
3. Set it as the EFI System Partition
    ```
    set 1 esp on
    ```
4. Create the swap partition of 8GiB (9-1=8)
    ```
    mkpart primary 1GiB 9GiB
    ```
5. Create the root partition
    ```
    mkpart primary 9GiB 100%
    ```
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
1. Format the EFI partition
    ```bash
    mkfs.vfat -F32 /dev/sda1
    ```
:::tip
The difference between `vfat` and `fat` is that `vfat` supports longer file names. Read more here: https://en.wikipedia.org/wiki/File_Allocation_Table. You can also run `mkfs.fat` though.
:::
2. Format the swap partition and label it `swap`
    ```bash
    mkswap -L swap /dev/sda2
    ```
3. Format the root partition and label it `root`
    ```bash
    mkfs.ext4 -L root /dev/sda3
    ```
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