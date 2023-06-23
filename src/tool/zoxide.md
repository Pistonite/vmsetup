# Zoxide
We will be setting up `zoxide`, which is a smarter `cd` with fuzzy search. Learn more here: https://github.com/ajeetdsouza/zoxide

## Install `fzf`
Install `fzf` with
```bash
pacman -Su fzf
```
## Install `zoxide`
Install `zoxide` with
```bash
cargo install zoxide
```

## Configuring `zoxide`
Add this to the end of your `.bashrc`
```bash
eval "$(zoxide init bash)"
```
By default, this enables `z` and `zi`. I like to alias `z` to `c`
```bash
alias c='z'
```