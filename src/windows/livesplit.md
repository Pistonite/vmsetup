# LiveSplit

LiveSplit is a speedrun timer

## Install
1. Download ZIP from https://livesplit.org/downloads/ and save it to `Downloads`
2. Set version for scripts
    ```powershell
    $version="1.8.29"
    ```
3. Extract it 
    ```powershell
    7z x -y ~/Downloads/LiveSplit_$version.zip "-o$HOME/dotbin/extra/portable/livesplit"
    ```
4. Configure link
    ```powershell
    Add-Content -Path ~/dotbin/extra/portable/link -Value "shim:livesplit/LiveSplit.exe"
    sudo dotbin-link
    ```

:::warning
Verify installation with
```powershell
livesplit &
```
:::

## Layouts and Settings
My layouts are at `~/dotbin/dotconfig/livesplit`.

To import my settings:
```powershell
cp ~/dotbin/dotconfig/livesplit/settings.cfg ~/dotbin/extra/portable/livesplit
```

You might also want to fix DPI settings:
1. Right click `LiveSplit.exe`
2. `Compability` > `Change high DPI settings`
3. Check `Override high DPI scaling behavior, Scaling performed by:`
4. Select `Application`
5. Save and close