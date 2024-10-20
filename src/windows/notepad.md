# Notepad Double Decrease (Notepad--)

General purpose notepad for tracking misc items, when I don't want to boot
up a full-fledged IDE.

:::danger
Do NOT use Notepad++. I do not condone Notepad++'s author's act of
using a popular software to publish statements intended to undermine
regional peace and stability.
:::

1. Download `Notepad--v2.19.0-win10-portable.zip` from https://sourceforge.net/projects/notepad-dd/files/notepad-v2.19/
   and save it in `Downloads`
2. Extract it
    ```powershell
    Expand-Archive $env:USERPROFILE/Downloads/Notepad--v2.19.0-win10-portable.zip -DestinationPath $env:USERPROFILE/dotbin/extra/portable
    ```
3. Configure link
    ```powershell
    notepad $env:USERPROFILE/dotbin/extra/portable/link
    ```
    Add the following

    ```txt
    shim:Notepad--v*/Notepad--.exe
    ```
    Then run

    ```powershell
    sudo dotbin-link
    ```
4. Pin the executable to Start Menu, and verify installation
    ```powershell
    notepad--&
    ```
