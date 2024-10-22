# Disk Setup
This section is 1.9-1.11 of the [Arch Linux Installation Guide](https://wiki.archlinux.org/title/Installation_guide).

## List the disks
Run `fdisk -l` to list the disks.

You will see something like this for a virtual machine.
```
Disk /dev/sda: 256 GiB, 274877906944 bytes, 536870912 sectors
Disk model: Virtual Disk
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
```

You will see something like this for a physical machine. Note I have 2 SSDs and
the USB drive I booted from.
```
Disk /dev/nvme0n1: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors
Disk model: Manufacturer
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/nvme1n1: 1.82 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: Manufacturer
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/sda: 15 GiB, 16107175936 bytes, 31459328 sectors
Disk model: USB DISK
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

You can setup the disks however you want. This is my setup
- One Boot/OS Disk (Typically the fastest)
  - EFI Partition for booting
  - Swap Partition
  - Root Partition
- Secondary Data Disk with one partition, typically a slower disk

## Partition Boot Drive
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

## Partition Data Disk
First again run `parted`, replace `/dev/nvme1n1` with the disk you want to partition.
```bash
parted -a optimal /dev/nvme1n1
```
Then Create one partition that uses the whole disk
```
mklabel gpt
mkpart primary 0% 100%
```
Again, `print` to make sure everything is OK and `quit` to exit.

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

:::warning
Make sure you select the right partition to format. Keep in mind it's
the partition, not the disk
:::
### Format EFI Partition
Replace `/dev/sda1` with the EFI partition devive
```bash
mkfs.vfat -F32 /dev/sda1
```
:::tip
The difference between `vfat` and `fat` is that `vfat` supports longer file names. Read more here: https://en.wikipedia.org/wiki/File_Allocation_Table. You can also run `mkfs.fat` though.
:::

### Format Swap Partition
Replace `/dev/sda2` with the swap partition device
```bash
mkswap -L swap /dev/sda2
```
This will label it `swap`

### Format Root Partition
Replace `/dev/sda3` with the root partition device
```bash
mkfs.ext4 -L root /dev/sda3
```
This will label it `root`
:::tip
Formatting the root/data partition might be a bit slower than the other partitions
:::

### Format Data Partition
Replace `/dev/nvme1n1p1` with the data partition device
```bash
mkfs.ext4 -L data /dev/nvme1n1p1
```
This will label it `data`
:::tip
Formatting the root/data partition might be a bit slower than the other partitions
:::


## Mount the file systems
Now that the partitions and file systems are created, we need to mount them
so we can control them from the live environment.
1. Mount the root partition to `/mnt`, replace `/dev/sda3` with the root partition device
    ```bash
    mount /dev/sda3 /mnt
    ```
2. Mount the EFI partition to `/mnt/boot`, replace `/dev/sda1` with the EFI partition device
    ```bash
    mount --mkdir /dev/sda1 /mnt/boot
    ```
3. Enable the swap volume, replace `/dev/sda2` with the swap partition device
    ```bash
    swapon /dev/sda2
    ```
:::tip
You probably don't need to mount the data partition when installing the system.
:::
