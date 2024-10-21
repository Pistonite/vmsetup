# Go
Go is a compiled, garbage collected programming language excellent at async, concurrent work

## Install
- Windows
    1. Download ZIP from https://go.dev/dl/ and save it to `Downloads`
    2. Set version for scripts
    ```powershell
    $version="1.23.2"
    ```
    3. Extract the downloaded archive
    ```powershell
    7z x -y ~/Downloads/go$version.windows-amd64.zip "-o$HOME/dotbin/extra/portable"
    ```
    4. Setup `GOPATH`
    ```powershell
    mkdir -p ~/dotbin/extra/portable/go/gopath
    $gopath=$env:USERPROFILE+"\dotbin\extra\portable\go\gopath"
    [System.Environment]::SetEnvironmentVariable('GOPATH',$gopath,"User")
    ```
    :::warning
    Currently, GOPATH is not added to PATH because I don't need to run any Go packages. This might change in the future
    :::
    5. Configure link
    ```powershell
    Add-Content -Path ~/dotbin/extra/portable/link -Value "go/bin/go.exe`ngo/bin/gofmt.exe"
    sudo dotbin-link
    ```
- Arch Linux
    ```bash
    sudo pacman -Syu go
    ```


:::warning
Restart Shell after linking the executable!

Then verify the installtion with
```powershell
go version
```
:::