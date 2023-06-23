# Getting the Image

This page is partially adopted from https://wiki.archlinux.org/title/Installation_guide

## Download the ISO
Download the ISO from one of the mirrors at https://archlinux.org/download/.
:::tip
Choosing a mirror closer to your geographic location will greatly improve download speed.
:::
You need
- The `archlinux-yyyy.mm.dd-x86_64.iso`
- The `archlinux-yyyy.mm.dd-x86_64.iso.sig` signature file
- The `sha256sums.txt` file (just opening it in the browser is fine)

`yyyy.mm.dd` is the date of the ISO release. (for example, `2023.06.01`)

Put those files in the same folder. We will be running commands in that folder.

## Verify the ISO
### SHA256
Open Powershell in the folder where you put the files, and use `Get-FileHash` cmdlet to get the hash
```powershell
Get-FileHash -Path archlinux-yyyy.mm.dd-x86_64.iso -Algorithm SHA256
```
Compare the hash with the one in `sha256sums.txt`. If they match (case-incensitive), you can continue. If not, download the ISO again.
:::tip
Here's an example powershell one-liner to compare the hash. Replace $url with the URL of `sha256sums.txt` and $file with the path of your ISO
```powershell
$url="http://mirrors.acm.wpi.edu/archlinux/iso/2023.06.01/sha256sums.txt"; $file="archlinux-2023.06.01-x86_64.iso"; ((Invoke-WebRequest $url).Content.ToString() -Split "\n" | Select-String -Pattern "archlinux-\d\d\d\d\.\d\d\.\d\d-x86_64\.iso").ToString().Substring(0, 64) -eq (Get-FileHash -Path $file -Algorithm SHA256).Hash.ToLower()
```
It would display `True` if the hash matches
:::

### GPG Signature
You are probably fine if the hash matches. But here's how to verify the signature anyway.

:::tip
If you are on Windows you need to download and install Gpg4win from https://www.gpg4win.org/download.html. You probably don't need any optional components. Restart powershell after installing.
:::
:::tip
Or you can gpg inside use WSL
:::

Run the gpg command below and replace the file with path to your `.iso.sig` file
```
gpg --keyserver-options auto-key-retrieve --verify archlinux-2023.06.01-x86_64.iso.sig
```

If you see something like `Good Signature from xxx` you are probably good.