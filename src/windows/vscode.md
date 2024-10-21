# Visual Studio Code
VS Code is good for organizing files and has better performance in lower-end devices.

## Installation
1. Download the ZIP from https://code.visualstudio.com/Download and put it in `Downloads`
2. Set the version for scripts
    ```powershell
    $version="1.94.2"
    ```
3. Extract the ZIP to `dotbin`
    ```powershell
    7z x -y ~/Downloads/VSCode-win32-x64-$version.zip "-o$HOME/dotbin/extra/portable/vscode"
    ```
4. Configure link
    ```powershell
    Add-Content -Path ~/dotbin/extra/portable/link -Value "shim:vscode/bin/code.cmd"
    sudo dotbin-link
    ```
5. Create Portable Data Directory
    ```powershell
    mkdir -p ~/dotbin/extra/portable/vscode/data 
    ```
5. Verify the installation
    ```powershell
    code --version
    ```

## Configuration
Launch VS Code:
```powershell
code
```

### Font
Open Settings, search for `terminal.integrated.fontFamily`, and change to `Hack Nerd Font`

### Terminal Profile
Search for `terminal.integrated.profiles`. Under Windows, select "Edit in settings.json".

Delete the auto-generated profiles, and add the PowerShell 7 profile as follows:
```json
"terminal.integrated.profiles.windows": {
    "PowerShell": {
        "path": [
            "${env:USERPROFILE}\\dotbin\\extra\\portable\\pwsh\\pwsh.exe",
        ],
        "args": ["-NoLogo"],
        "icon": "terminal-powershell"
    }
}
```

Save and close settings.json. Then change `terminal.integrated.defaultProfile.windows` to `PowerShell`