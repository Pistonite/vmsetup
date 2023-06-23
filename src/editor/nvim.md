# NeoVIM
I chose NeoVIM as the editor because I am familiar with VIM and `nvim` has support for language servers.

## Create `init.lua`
First, create the config file
```bash
mkdir -p ~/.config/nvim && touch ~/.config/nvim/init.nvim
```

yay -Su nvim-packer-git

require("packer").startup(function(use)
  use "wbthomason/packer.nvim"
end)

put in ~/.config/nvim/lua/plug.lua

in ~/.config/nvim/init.nvim put 
lua require("plug")

https://rsdlt.github.io/posts/rust-nvim-ide-guide-walkthrough-development-debug/