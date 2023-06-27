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
export PATH="$HOME/bin:$PATH"