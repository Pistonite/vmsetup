# Windows Terminal
Setting up windows terminal

## Starship
To install starship on windows, first install it with `cargo install starship`
Then download the config file with
```powershell
mkdir -p $HOME\starship
iwr https://vmsetup.pistonite.org/home/.config/starship.toml -OutFile $HOME\starship\starship.toml
```
Finally add the following to the powershell profile:
```powershell
# Starship
$env:STARSHIP_CONFIG = "$HOME\starship\starship.toml"
Invoke-Expression (&starship init powershell)
```
Restart the terminal and you should see the starship prompt.

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
If you need a nerd font you can download from here: https://www.nerdfonts.com/font-downloads

Then open Windows Terminal > Settings. Under Profiles select Defaults > Appearance, and change the color scheme and font.

## Padding
In the same place (Windows Terminal > Settings. Under Profiles select Defaults > Appearance),
scroll down, and change Padding to 2 and scroll bar visibility to hidden

## Title bar
Go to Appearance, then turn off "Hide the title bar" and "Always show tabs"
