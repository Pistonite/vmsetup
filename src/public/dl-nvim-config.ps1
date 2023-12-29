$configdir = "$env:LOCALAPPDATA\nvim"
mkdir -p $env:USERPROFILE/.vim
mkdir -p $configdir/lua
mkdir -p $configdir/after/plugin
curl -o $configdir/init.lua https://vmsetup.pistonite.org/home/.config/nvim/init.lua
curl -o $configdir/lua/plugins.lua https://vmsetup.pistonite.org/home/.config/nvim/lua/plugins.lua
curl -o $configdir/lua/keys.lua https://vmsetup.pistonite.org/home/.config/nvim/lua/keys.lua
curl -o $configdir/lua/opts.lua https://vmsetup.pistonite.org/home/.config/nvim/lua/opts.lua
curl -o $configdir/after/plugin/harpoon.lua https://vmsetup.pistonite.org/home/.config/nvim/after/plugin/harpoon.lua
curl -o $configdir/after/plugin/lsp-zero.lua https://vmsetup.pistonite.org/home/.config/nvim/after/plugin/lsp-zero.lua
curl -o $configdir/after/plugin/lsp-inlayhints.lua https://vmsetup.pistonite.org/home/.config/nvim/after/plugin/lsp-inlayhints.lua
curl -o $configdir/after/plugin/nvim-comment.lua https://vmsetup.pistonite.org/home/.config/nvim/after/plugin/nvim-comment.lua
curl -o $configdir/after/plugin/nvim-tree.lua https://vmsetup.pistonite.org/home/.config/nvim/after/plugin/nvim-tree.lua
curl -o $configdir/after/plugin/nvim-treesitter-context.lua https://vmsetup.pistonite.org/home/.config/nvim/after/plugin/nvim-treesitter-context.lua
curl -o $configdir/after/plugin/nvim-treesitter.lua https://vmsetup.pistonite.org/home/.config/nvim/after/plugin/nvim-treesitter.lua
curl -o $configdir/after/plugin/telescope.lua https://vmsetup.pistonite.org/home/.config/nvim/after/plugin/telescope.lua
curl -o $configdir/after/plugin/undotree.lua https://vmsetup.pistonite.org/home/.config/nvim/after/plugin/undotree.lua
curl -o $configdir/after/plugin/vim-floaterm.lua https://vmsetup.pistonite.org/home/.config/nvim/after/plugin/vim-floaterm.lua
curl -o $configdir/after/plugin/vscode.lua https://vmsetup.pistonite.org/home/.config/nvim/after/plugin/vscode.lua
