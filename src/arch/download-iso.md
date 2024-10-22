# Getting the Image

This section is 1.1-1.3 of the [Arch Linux Installation Guide](https://wiki.archlinux.org/title/Installation_guide).

## Download the ISO
Download the ISO from one of the mirrors at https://archlinux.org/download/.
:::tip
Choosing a mirror closer to your geographic location will greatly improve download speed.
:::
Once selected a mirror, set the variable for scripts:
:::warning
On PowerShell, it's assumed you have GNU Coreutils installed
with [`dotbin`](../tool/dotbin.md) installation
:::
- PowerShell
    ```powershell
    $MIRROR="https://mirrors.mit.edu/archlinux/iso/2024.10.01/"
    $VERSION=$MIRROR -replace "/+$" -split "/" | select-object -last 1
    ```
- Bash
    ```bash
    MIRROR="https://mirrors.mit.edu/archlinux/iso/2024.10.01/"
    VERSION=$(basename $(echo $MIRROR | sed 's/\/\+$//'))
    ```
Next, use the script below to download
- The `archlinux-yyyy.mm.dd-x86_64.iso`
- The `archlinux-yyyy.mm.dd-x86_64.iso.sig` signature file
- The `sha256sums.txt` file
- The `b2sums.txt` file
```bash
mkdir archlinux
curl -o archlinux/sha256sums.txt "$MIRROR/sha256sums.txt"
curl -o archlinux/b2sums.txt "$MIRROR/b2sums.txt"
curl -o "archlinux/archlinux-$VERSION-x86_64.iso" "$MIRROR/archlinux-$VERSION-x86_64.iso"
curl -o "archlinux/archlinux-$VERSION-x86_64.iso.sig" "$MIRROR/archlinux-$VERSION-x86_64.iso.sig"
```

## Verify the ISO
### Checksums
:::warning
If you have close the shell session, re-execute the scripts for variables above
:::
:::danger
There are currently some bugs in uutils/coreutils with hashsum, manual verification is recommended on Windows
```powershell
cd archlinux
b2sum archlinux-$VERSION-x86_64.iso
cat b2sums.txt | rg "archlinux-$VERSION-x86_64.iso"
sha256sum archlinux-$VERSION-x86_64.iso
cat sha256sums.txt | rg "archlinux-$VERSION-x86_64.iso"
```
:::

Verify the SHA256 and BLAKE2 checksums of the ISO file to ensure the integrity of the downloaded file.
```bash
cd archlinux
sha256sum -c sha256sums.txt --ignore-missing
b2sum -c b2sums.txt --ignore-missing
```

### GPG Signature
:::tip
Install GnuPG on Windows with [these instructions](../windows/utilities.md#gnupg)
:::
:::warning
If you have close the shell session, re-execute the scripts for variables above
:::
Verify the GPG signature to ensure the authenticity of the ISO file.

Run the command below
```bash
cd archlinux
gpg --keyserver-options auto-key-retrieve --verify archlinux-$VERSION-x86_64.iso.sig
```

You should see `Good signature` in the output.

## Making the Bootable USB
If you are installing Arch Linux on a VM, you are all set! However, a bootable drive is needed for a physical machine.

On Linux, see https://wiki.archlinux.org/title/USB_flash_installation_medium

On Windows: Use https://sourceforge.net/p/usbwriter/wiki/Documentation/
