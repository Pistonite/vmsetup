# System Settings
Useful system settings for Windows

## File Explorer
Bring back the old right-click context menu by default :)
```powershell
reg.exe add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
```
:::tip
Taking from Official source https://answers.microsoft.com/en-us/windows/forum/all/restore-old-right-click-context-menu-in-windows-11/a62e797c-eaf3-411b-aeec-e460e6e5a82a
:::

Then enable these settings:

1. Go to `System` > `For developers`
2. Under File Explorer, enable the following:
   - Show file extensions
   - Show hidden and system files
   - Show full path in title bar

Open Explorer, under `View` > `Show`, enable the following:
- Compact View
- File name extensions
- Hidden items

## Sudo for Windows
1. Go to `System` > `For developers`
2. Enable `Enable sudo`
3. Change the mode to `Inline`

## PowerShell
1. Go to `System` > `For developers`
2. Enable remote signing execution policy


## Start Menu
1. Go to `Personalization` > `Start`
2. Select `More pins`
3. Select `Folders`, enable `Settings`

## Taskbar
1. Go to `Personalization` > `Taskbar`
2. Turn off `Task view` and `Widgets`
3. Under `Taskbar behavior`:
   - Change `Taskbar alignment` to `Left`
