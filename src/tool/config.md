# Configuring the shell
We will configure `bash` and `starship` now to make the shell useable.

## Directory setup
I like to have 2 directories in my home directory: `dev` and `bin`.

`dev` will be where I keep all the repos, and `bin` will be where I keep drop-in binary tools.

```bash
mkdir ~/dev ~/bin
```

## `.bashrc`
You can download my `.bashrc` file with the following command
```bash
curl -o ~/.bashrc https://vmsetup.pistonite.org/home/.bashrc
```

Or, manually copy and paste the following to your `~/.bashrc`
```bash
#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# ALIAS ========================================
# replacements
alias ls='eza' 
alias du='dust'
alias cat='bat'
alias grep='grep --color=auto'
alias vi='nvim'
alias vim='nvim'
alias nvim='nvim -p'
# shorthands
alias c='z'    # zoxide path jumper (e.g "c <path>") zi for interactive
alias j='just' # justfile runner (e.g. "j <task>")
alias task='go-task' # taskfile runner
alias x='task' # taskfile runner (e.g. "x <task>")
# quick config editor
alias vibash='nvim ~/.bashrc'
alias vinvim='nvim ~/.config/nvim/'
# default sudo
alias pacman='sudo pacman'

# EXPORTS ======================================
# default editor
export EDITOR='nvim'
export HOST_MACHINE_IP="192.168.0.218"

# CARGO ========================================
. "$HOME/.cargo/env"

# STARSHIP =====================================
eval "$(starship init bash)"

# ZOXIDE =======================================
eval "$(zoxide init bash)"

# NVM ==========================================
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# PYENV ========================================
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

# BUN ==========================================
export BUN_INSTALL="$HOME/.bun"
export PATH=$BUN_INSTALL/bin:$PATH

# DENO =========================================
export DENO_INSTALL="$HOME/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

# HOME/BIN =====================================
export PATH="$HOME/bin:$PATH"

# MEGATON ======================================
export MEGATON_HOME="$HOME/dev/megaton"
export PATH="$MEGATON_HOME/megaton-hammer/target/release:$PATH"

# GO ===========================================
export PATH=/usr/local/go/bin:$PATH
```

Then open it with nvim
```bash
nvim ~/.bashrc
```
And change `HOST_MACHINE_IP` to the IP of your Windows host.
:::tip
You can find the IP of your Windows host by running `ipconfig` in a Windows terminal.
:::

## Reload the shell
Finally, reload the shell to apply the changes
```bash
source ~/.bashrc
```
