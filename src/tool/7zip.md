# 7-Zip
7-Zip has better performance than native tools on Windows, and has good multi-platform support.

## Windows
1. Download the `exe` installer from https://www.7-zip.org/
2. When installing, navigate to `C:\Users\<user>\dotbin\extra\portable\7zip` as the installation location
3. Configure link
    ```powershell
    Add-Content -Path ~\dotbin\extra\portable\link -Value "shim:7zip/7z.exe`nshim:7zip/7zFM.exe"
    sudo dotbin-link  
    ```

## Arch Linux
```bash
sudo pacman -Syu p7zip
```
