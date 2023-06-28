# Replace init.lua, after, and the lua directory in src/public/home/.config/nvim with ~/.config/nvim
copy-nvim:
    rm -rf src/public/home/.config/nvim
    mkdir -p src/public/home/.config/nvim
    cp ~/.config/nvim/init.lua src/public/home/.config/nvim
    cp -r ~/.config/nvim/after src/public/home/.config/nvim
    cp -r ~/.config/nvim/lua src/public/home/.config/nvim

