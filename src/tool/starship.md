# Starship
Starship is a command prompt that's built in rust. See https://starship.rs for more details.

:::warning
You need a nerd font installed on the host OS for the icons to work. See https://www.nerdfonts.com/
:::

## Install `cmake`
CMake is required to build some of the dependencies.
```bash
pacman -Su cmake
```
:::tip
You need to run `pacman` with `sudo`. I set an alias for this
:::
:::tip
`-S` is for install and `-u` is for updating existing. You can pass `-Syu` instead of `-Su` to not having to confirm
:::

## Install starship
```bash
cargo install starship
```
:::warning
Binary can take sometime to compile depending on your machine. For the tools, please be patient if it seems to be stuck
:::

## Configure starship
To use my config, run this
```bash
mkdir -p ~/.config && curl -o ~/.config/starship.toml https://vmsetup.pistonite.org/starship.toml
```
Verify you downloaded it correctly with
```bash
head ~/.config/starship.toml
```
Or you can learn how to configure your own at https://starship.rs/config/

## Add starship to shell
Finally, add this to the end of your `.bashrc`
```bash
eval "$(starship init bash)"
```
And delete the old line that starts with `PS1`

Reload the shell and you should see new prompt.
:::tip
Guide for how do configure other shells: https://starship.rs/guide/#step-2-set-up-your-shell-to-use-starship
:::