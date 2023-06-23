# Oxidize
Not enough rust? Here are my choices of other useful tools that `cargo install`s

| Package | Description | Link |
| `exa` | `ls` but better | https://github.com/ogham/exa |
| `bat` | `cat` with color |
| `cargo-info` | Cargo command for getting info about crates, and most usefully, feature flags |
| `cargo-watch` | Cargo command for running command in watch mode |
| `just` | Simple command runner |
| `du-dust` | Replacement for `du` |

Install all of them with
```bash
cargo install exa bat cargo-info cargo-watch just du-dust
```

Then add the aliases
```bash
alias ls='exa'
alias cat='bat'
alias j='just'
alias sj='sudo just'
alias du='dust'
```
