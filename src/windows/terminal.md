# Windows Terminal
Windows Terminal should come pre-installed with newer versions of Windows.
If it's not, you can install it in the Microsoft Store.

## Color Scheme
Open Windows Terminal, then open Settings. On the bottom left corner there's a `Open JSON file` option.

Once you have the JSON opened, find `"schemes"` and add my scheme,
which is mostly solarized dark with a few tweaks.
```json
{
    "background": "#002B36",
    "black": "#002B36",
    "blue": "#268BD2",
    "brightBlack": "#39E3D0",
    "brightBlue": "#D5C4E0",
    "brightCyan": "#A3DBD6",
    "brightGreen": "#95BA8C",
    "brightPurple": "#CC68BA",
    "brightRed": "#CB4B16",
    "brightWhite": "#FDF6E3",
    "brightYellow": "#D4D3A3",
    "cursorColor": "#FFFFFF",
    "cyan": "#3DA191",
    "foreground": "#CFEBED",
    "green": "#859900",
    "name": "Solarized Dark Piston",
    "purple": "#D33682",
    "red": "#DC322F",
    "selectionBackground": "#FFFFFF",
    "white": "#EEE8D5",
    "yellow": "#B58900"
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

Then open Windows Terminal > Settings. Under Profiles select Defaults > Appearance, and change the color scheme and font.

## Padding
In the same place (Windows Terminal > Settings. Under Profiles select Defaults > Appearance),
scroll down, and change Padding to 2 and scroll bar visibility to hidden

## Title bar
Go to Appearance, then turn off "Hide the title bar" and "Always show tabs"

## Shell Prompt
See [`Starship`](../tool/starship.md) for setting up the shell prompt I use.

