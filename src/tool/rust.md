# Rust
We will install Rust as the first thing so we can install some additional tools with `cargo`.

## Directory setup
I like to have 2 directories in my home directory: `dev` and `bin`.

`dev` will be where I keep all the repos, and `bin` will be where I keep drop-in binary tools.

```bash
mkdir ~/dev ~/bin
```

## Install Rust
We will install Rust with https://rustup.rs/. Run the installer script
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Enter `1` and hit Enter to install to the default locations

## Reload shell
Edit `.bashrc` with
```bash
nvim ~/.bashrc
```
and add the following 2 alias
```bash
alias vi='nvim -p'
alias vim='nvim -p'
alias vish='nvim ~/.bashrc'
alias reload='source ~/.bashrc'
```
then reload the shell with
```bash
source ~/.bashrc
```

Great! Now we can use `vi` and `vim` to open files in `nvim`, and use `vish` to edit `.bashrc`, and finally use `reload` to reload the shell whenever needed without typing the whole thing.