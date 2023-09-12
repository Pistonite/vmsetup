default:
    @just --list --unsorted

install:
    cargo install txtpp --features cli
    bun i

dev:
    bunx vitepress dev src --host

build:
    bunx vitepress build src

# Replace init.lua, after, and the lua directory in src/public/home/.config/nvim with ~/.config/nvim
nvim:
    rm -rf src/public/home/.config/nvim
    mkdir -p src/public/home/.config/nvim
    cp ~/.config/nvim/init.lua src/public/home/.config/nvim
    cp -r ~/.config/nvim/after src/public/home/.config/nvim
    cp -r ~/.config/nvim/lua src/public/home/.config/nvim

# Replace .bashrc
bash:
    cp ~/.bashrc src/public/home/.bashrc
    txtpp src -r
