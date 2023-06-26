# Preinstall Checks
This is 1.5-1.8 from https://wiki.archlinux.org/title/Installation_guide

## Set the keyboard layout/console font
The default keyboard layout is US. If you need something else, see https://wiki.archlinux.org/title/Installation_guide#Set_the_console_keyboard_layout_and_font

## Verify the boot mode
This command should run without error
```bash
ls /sys/firmware/efi/efivars
```

## Verify time
Run
```bash
timedatectl
```
Make sure the `Universal time` is correct
:::tip
Don't worry about the time zone, that will be setup later
:::