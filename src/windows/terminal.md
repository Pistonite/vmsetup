# Windows Terminal
Windows Terminal should come pre-installed with newer versions of Windows.
If it's not, you can install it in the Microsoft Store.

## Color Scheme
Open Windows Terminal, then open Settings. On the bottom left corner there's a `Open JSON file` option.

Once you have the JSON opened, find `"schemes"` and add the catppuccin theme
:::tip
My theme is a modified version that uses mocha colors with a frappe background.
For the official colors, download from https://github.com/catppuccin/windows-terminal 
:::
```json
        {
            "background": "#303446",
            "black": "#45475A",
            "blue": "#89B4FA",
            "brightBlack": "#585B70",
            "brightBlue": "#89B4FA",
            "brightCyan": "#94E2D5",
            "brightGreen": "#A6E3A1",
            "brightPurple": "#F5C2E7",
            "brightRed": "#F38BA8",
            "brightWhite": "#A6ADC8",
            "brightYellow": "#F9E2AF",
            "cursorColor": "#F5E0DC",
            "cyan": "#94E2D5",
            "foreground": "#CDD6F4",
            "green": "#A6E3A1",
            "name": "Catppuccin Mocha/Frappe",
            "purple": "#F5C2E7",
            "red": "#F38BA8",
            "selectionBackground": "#585B70",
            "white": "#BAC2DE",
            "yellow": "#F9E2AF"
        },
```

## Key Binding
There are some default key bindings that will interfere with nvim.
Replace the `"actions"` section with my key bindings:
```json
"actions": [
    {
        "command": "find",
        "keys": "ctrl+shift+f"
    },
    {
        "command": "paste"
    },
    {
        "command": 
        {
            "action": "copy",
            "singleLine": false
        },
        "keys": "ctrl+c"
    },
    {
        "command": "unbound",
        "keys": "ctrl+v"
    },
    {
        "command": 
        {
            "action": "splitPane",
            "split": "auto",
            "splitMode": "duplicate"
        },
        "keys": "alt+shift+d"
    }
],


```

## Font
Download `Hack Nerd Font` from here: https://www.nerdfonts.com/font-downloads

Then open `Settings`. Under `Profiles`, select `Defaults` > `Appearance`, 
and change the following:
- `Color Scheme: Catppuccin Mocha/Frappe`
- `Font Face: Hack Nerd Font`
- `Automatically adjust brightness: Always`

## Padding
In the same place (Windows Terminal > Settings. Under Profiles select Defaults > Appearance),
scroll down, and change Padding to 2 and scroll bar visibility to hidden

## Title bar
Go to Appearance, then turn off "Hide the title bar" and "Always show tabs"

## Shell Prompt
See [`Starship`](../tool/starship.md) for setting up the shell prompt I use.

