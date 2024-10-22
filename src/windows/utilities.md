# Utilities
Other essential utilities to have parity with Linux systems.

## Curl
Curl is installed as a Component on Windows by default. You can verify its installation
```powershell
which curl
```

## Make
1. Download the following, and save them in the `Downloads` directory:
    - libintl (`libintl-0.14.4-bin.zip`) from https://gnuwin32.sourceforge.net/packages/libintl.htm
    - libiconv2 (`libiconv-1.9.2-1-bin.zip`) from https://gnuwin32.sourceforge.net/packages/libiconv.htm
    - make `make-3.81-bin.zip` from https://sourceforge.net/projects/gnuwin32/files/make/3.81/
2. Extract them
    ```powershell
    7z x -y ~/Downloads/libintl-0.14.4-bin.zip "-o$HOME/dotbin/extra/portable/libintl-0.14.4"
    7z x -y ~/Downloads/libiconv-1.9.2-1-bin.zip "-o$HOME/dotbin/extra/portable/libiconv-1.9.2-1"
    7z x -y ~/Downloads/make-3.81-bin.zip "-o$HOME/dotbin/extra/portable/make-3.81"
    ```
3. Configure link
    ```powershell
    Add-Content -Path ~\dotbin\extra\portable\link -Value "libiconv-*/bin/*`nlibintl-*/bin/*`nmake-*/bin/*"
    sudo dotbin-link
    ```

4. Verify installation
    ```powershell
    make --version
    ```

## Sed
:::warning
Make sure `libiconv` and `libintl` are setup as shown above
:::
1. Download the following, and save them in the `Downloads` directory:
    - regex (`regex-2.7-bin.zip`) from https://gnuwin32.sourceforge.net/packages/regex.htm
    - sed `sed-4.2.1-bin.zip` from https://gnuwin32.sourceforge.net/packages/sed.htm
2. Extract them
    ```powershell
    7z x -y ~/Downloads/regex-2.7-bin.zip "-o$HOME/dotbin/extra/portable/regex-2.7"
    7z x -y ~/Downloads/sed-4.2.1-bin.zip "-o$HOME/dotbin/extra/portable/sed-4.2.1"
    ```
4. Configure link
    ```powershell
    Add-Content -Path ~\dotbin\extra\portable\link -Value "regex-*/bin/*`nsed-*/bin/sed.exe"
    sudo dotbin-link
    ```
5. Verify installation
    ```powershell
    sed --version
    ```

## GnuPG
You will need this for verifying signatures of downloaded files.

1. Download and launch the installer from https://www.gnupg.org/download/index.html
2. Copy the installation to `dotbin`
    ```powershell
    cp -r "C:\Program Files (x86)\gnupg" ~/dotbin/extra/portable/gnupg
    rm ~/dotbin/extra/portable/gnupg/gnupg-uninstall.exe
    ```
3. Remove `GnuPG` from the `PATH` environment variable
    ```powershell
    $path = [System.Environment]::GetEnvironmentVariable("PATH", "Machine")
    $path = $path | sed -r 's/C:\\Program Files \(x86\)\\gnupg\\bin//' | sed 's/;;/;/' | sed 's/;;/;/'
    sudo pwsh -c{[System.Environment]::SetEnvironmentVariable("PATH", $path, "Machine")}
    $path = [System.Environment]::GetEnvironmentVariable("PATH", "User")
    $path = $path | sed -r 's/C:\\Program Files \(x86\)\\gnupg\\bin//' | sed 's/;;/;/' | sed 's/;;/;/'
    [System.Environment]::SetEnvironmentVariable("PATH", $path, "User")
    ```
4. Configure link
    ```powershell
    Add-Content -Path ~\dotbin\extra\portable\link -Value "gnupg/bin/*.dll`ngnupg/bin/gpg.exe"
    sudo dotbin-link
    ```
5. Uninstall GnuPG from the system by going into Windows Settings
:::warning
After restarting the shell, verify installation with
```powershell
which gpg
gpg --version
```
:::


## Wget
```powershell
curl -o ~/dotbin/extra/bin/wget.exe https://eternallybored.org/misc/wget/1.21.4/64/wget.exe
```
Verify installation
```powershell
wget --version
```
