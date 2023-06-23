# Bash
We will add some useful aliases and functions to `.bashrc` to make our life easier.

:::tip
If you want to see the full `.bashrc` I use, it is at [/.bashrc](/.bashrc)
:::

## Aliases
Edit `.bashrc` with
```bash
nvim ~/.bashrc
```
and add the following alias
```bash
alias vi='nvim -p'
alias vim='nvim -p'
alias vish='nvim ~/.bashrc'
alias reload='source ~/.bashrc'
```
I will also have another section for aliases for the commands that I want to default run in sudo mode
```bash
alias pacman='sudo pacman'
```

then reload the shell with
```bash
source ~/.bashrc
```

Great! Now we can use `vi` and `vim` to open files in `nvim`, and use `vish` to edit `.bashrc`, and finally use `reload` to reload the shell whenever needed without typing the whole thing.