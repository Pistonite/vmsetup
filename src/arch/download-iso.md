```admonish info
This section is 1.1-1.3 of the [Arch Linux Installation Guide](https://wiki.archlinux.org/title/Installation_guide).
```

## Download the ISO
Download the ISO from one of the mirrors at 
[https://archlinux.org/download](https://archlinux.org/download).
Choosing a mirror closer to your geographic location will greatly improve download speed.
Once selected a mirror, set the variable for scripts:

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
```bash
mkdir archlinux
curl -o archlinux/sha256sums.txt "$MIRROR/sha256sums.txt"
curl -o "archlinux/archlinux-$VERSION-x86_64.iso" "$MIRROR/archlinux-$VERSION-x86_64.iso"
curl -o "archlinux/archlinux-$VERSION-x86_64.iso.sig" "$MIRROR/archlinux-$VERSION-x86_64.iso.sig"
```

## Verify the ISO
### Checksums
```admonish warning
On Windows, `sha256sum` is provided by the `coreutils` package of [Shaft](../shaft.md),
which uses `uutils/coreutils`. Alternatively, you can use Git-bash.
```

Verify the SHA256 and BLAKE2 checksums of the ISO file to ensure the integrity of the downloaded file.
```bash
cd archlinux
sha256sum -c sha256sums.txt --ignore-missing
```

### GPG Signature
```admonish warning
On Windows, `gpg` is provided by the `shellutils` package of [Shaft](../shaft.md),
which uses MinGW. Alternatively, Install [GnuPG for Windows](https://www.gnupg.org/download/index.html)
```
```admonish warning
If you have close the shell session, re-execute the scripts for variables above
```
Verify the GPG signature to ensure the authenticity of the ISO file.

Run the command below
```bash
cd archlinux
gpg --keyserver-options auto-key-retrieve --verify archlinux-$VERSION-x86_64.iso.sig
```

You should see `Good signature` in the output.

## Making the Bootable USB
If you are installing Arch Linux on a VM, you are all set! However, a bootable drive is needed for a physical machine.

### Windows
Download [USBWriter](https://sourceforge.net/p/usbwriter/wiki/Documentation/)
and flash the ISO image onto a USB stick.

### Linux
See [https://wiki.archlinux.org/title/USB_flash_installation_medium](https://wiki.archlinux.org/title/USB_flash_installation_medium)
