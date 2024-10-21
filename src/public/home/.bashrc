#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# ALIAS ========================================
alias grep='grep --color=auto'
# shorthands
#alias c='z'    # zoxide path jumper (e.g "c <path>") zi for interactive
#alias j='just' # justfile runner (e.g. "j <task>")
#alias task='go-task' # taskfile runner
#alias x='task' # taskfile runner (e.g. "x <task>")
# quick config editor
alias vibash='nvim ~/.bashrc'
alias vinvim='nvim ~/.config/nvim/'

# EXPORTS ======================================
# default editor
export EDITOR='nvim'
export HOST_MACHINE_IP="192.168.0.218"

# CARGO ========================================
. "$HOME/.cargo/env"

# STARSHIP
eval "$(starship init bash)"

# ZOXIDE
eval "$(zoxide init bash)"

# NVM ==========================================
# export NVM_DIR="$HOME/.nvm"
#[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
#[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# PYENV ========================================
#export PYENV_ROOT="$HOME/.pyenv"
#command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
#eval "$(pyenv init -)"
#eval "$(pyenv virtualenv-init -)"

# MEGATON ======================================
export MEGATON_HOME="$HOME/dev/megaton"
export PATH="$MEGATON_HOME/megaton-hammer/target/release:$PATH"

# GO ===========================================
export PATH=/usr/local/go/bin:$PATH
