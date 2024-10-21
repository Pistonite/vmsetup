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

## Wget
```powershell
curl -o ~/dotbin/extra/bin/wget.exe https://eternallybored.org/misc/wget/1.21.4/64/wget.exe
```
Verify installation
```powershell
wget --version
```
