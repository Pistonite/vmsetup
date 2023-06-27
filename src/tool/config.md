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
alias ls='exa' 
alias du='dust'
alias cat='bat'
alias grep='grep --color=auto'
alias vi='nvim'
alias vim='nvim'
alias nvim='nvim -p'
# shorthands
alias c='z'    # zoxide path jumper (e.g "c <path>") zi for interactive
alias j='just' # justfile runner (e.g. "j <task>")
# quick config editor
alias vibash='nvim ~/.bashrc'
alias vinvim='nvim ~/.config/nvim/init.lua'
# default sudo
alias pacman='sudo pacman'

# EXPORTS ======================================
# default editor
export EDITOR='nvim'
export HOST_MACHINE_IP='192.168.0.218'

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

# HOME/BIN =====================================
export PATH="$HOME/bin:$PATH"```

Then open it with nvim
```bash
nvim ~/.bashrc
```
And change `HOST_MACHINE_IP` to the IP of your Windows host.
:::tip
You can find the IP of your Windows host by running `ipconfig` in a Windows terminal.
:::

## `.config/starship.toml`
Starship is the shell prompt. You can download my config with the following
```bash
mkdir ~/.config && curl -o ~/.config/starship.toml https://vmsetup.pistonite.org/home/.config/starship.toml
```

Or manually copy and paste the following to your `~/.config/starship.toml`
```toml
# ~/.config/starship.toml
# Use custom format
format = "$shell://$directory$git_branch$git_commit$git_state$git_status $cmake$rust$nodejs$python\n$time$jobs$character"

add_newline = true
command_timeout = 1000
[shell]
disabled = false
powershell_indicator = "\ue70f"
bash_indicator = "\uf303"
cmd_indicator = "\uf489"

[time]
disabled = true
format = "[$time]($style)"
time_format = '%H:%M'

# Replace the "❯" symbol in the prompt with "➜"
[character]
success_symbol = "[\uf814](green)"
error_symbol = "[\uf814](red)"

[jobs]
number_threshold = 1
format = "[\\[$number\\] ]($style)"

[aws]
symbol = "  "

[cmake]
format = "[$symbol($version )]($style)"
symbol = "\ue61d "

[conda]
symbol = " "

[dart]
symbol = " "

[directory]
truncate_to_repo = false
truncation_symbol = ".../"
use_os_path_sep = false
read_only = " "

[docker_context]
symbol = " "

[elixir]
symbol = " "

[elm]
symbol = " "

[git_branch]
format = "[$symbol$branch]($style)"
symbol = "\uf7a1 "

[git_status]
format = "[( $ahead_behind)]($style)"
behind = "[\uf433](bold red)"
ahead = "[\uf431](bold green)"

[golang]
symbol = " "

[hg_branch]
symbol = " "

[java]
symbol = " "

[julia]
symbol = " "

[memory_usage]
symbol = " "

[nim]
symbol = " "

[nix_shell]
symbol = " "

[package]
symbol = " "

[perl]
symbol = " "

[php]
symbol = " "

[python]
format = '[${symbol}${pyenv_prefix}(${version} )(\($virtualenv\) )]($style)'
symbol = "\ue73c "
detect_folders = ["scripts/__pycache__"]

[ruby]
symbol = " "

[rust]
format = "[$symbol($version )]($style)"
symbol = " "

[scala]
symbol = " "

[shlvl]
symbol = " "

[swift]
symbol = "ﯣ "

[nodejs]
format = "[$symbol($version )]($style)"
symbol = "\uf898 "
```

## Reload the shell
Finally, reload the shell to apply the changes
```bash
source ~/.bashrc
```
