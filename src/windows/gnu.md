# Other GNU Utils
We will install other GNU utilities into `dotbin`.
Make sure you already have that setup with [`dotbin`](../tool/dotbin.md).

## Make
1. Download the following, and save them in the `Downloads` directory:
    - libintl (`libintl-0.14.4-bin.zip`) from https://gnuwin32.sourceforge.net/packages/libintl.htm
    - libiconv2 (`libiconv-1.9.2-1-bin.zip`) from https://gnuwin32.sourceforge.net/packages/libiconv.htm
    - make `make-3.81-bin.zip` from https://sourceforge.net/projects/gnuwin32/files/make/3.81/
2. Extract them
    ```powershell
    Expand-Archive $env:USERPROFILE/Downloads/libintl-0.14.4-bin.zip -DestinationPath $env:USERPROFILE/dotbin/extra/portable/libintl-0.14.4
    Expand-Archive $env:USERPROFILE/Downloads/libiconv-1.9.2-1-bin.zip -DestinationPath $env:USERPROFILE/dotbin/extra/portable/libiconv-1.9.2-1
    Expand-Archive $env:USERPROFILE/Downloads/make-3.81-bin.zip -DestinationPath $env:USERPROFILE/dotbin/extra/portable/make-3.81
    ```
3. Create link configuration
    ```powershell
    code $env:USERPROFILE/dotbin/extra/portable/link
    ```
    Then add the following

    ```txt
    libiconv-*/bin/*
    libintl-*/bin/*
    make-*/bin/*
    ```
    Then run

    ```powershell
    sudo pwsh -c{dotbin-extra link}
    ```
4. Verify installation
    ```powershell
    make --version
    ```

## Wget
```powershell
iwr https://eternallybored.org/misc/wget/1.21.4/64/wget.exe -OutFile $env:USERPROFILE/dotbin/extra/bin/wget.exe
```
Verify installation
```powershell
wget --version
```
