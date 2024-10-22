# Preinstall Checks
This section is 1.5-1.6 of the [Arch Linux Installation Guide](https://wiki.archlinux.org/title/Installation_guide).

:::tip
**Keyboard Layout and Font**
The default keyboard layout is US. If you need something else, see https://wiki.archlinux.org/title/Installation_guide#Set_the_console_keyboard_layout_and_font
:::

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
The `Universal time` should be correct (see https://www.timeanddate.com/worldclock/timezone/utc)
:::tip
Don't worry about the time zone, that will be setup later
:::
