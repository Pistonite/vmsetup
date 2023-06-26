# Neovim
I made my configs from 2 tutorials:
- [ThePrimeagen's setup](https://www.youtube.com/watch?v=w7i4amO_zaE)
- [Santiago's setup](https://rsdlt.github.io/posts/rust-nvim-ide-guide-walkthrough-development-debug/)

(And of course copying from the examples provided by the plugins)

## packer.nvim
Install `packer.nvim`, which is the plugin manager.
```bash
yay -Syu nvim-packer-git
```

## Get the configs
My configs are on [GitHub](https://github.com/Pistonite/vmsetup/tree/main/src/public/home/.config/nvim)

I made a script to `curl` them to the right places. If you want to use them, backup your existing configs
```bash
mv ~/.config/nvim ~/.config/nvim.bak
```
Then run the script
```bash
curl -o- https://vmsetup.pistonite.org/dl-nvim-config.sh | bash
```

## Install the plugins
Start neovim
```bash
nvim
```
You will see some errors because the plugins are not installed. It's OK. Run the following command to install them
```vim
:PackerSync
```
Restart neovim and you should be good.

## GitHub Copilot
If you have GitHub Copilor, run the following to set it up
```vim
:Copilot setup
```
Then follow on-screen instructions.

You can use `:Copilor status` to check at anytime if it is enabled

## Key mappings
Here are some of my key mappings. I use the default leader key.
### Normal operations
| Key | Action | Plugin |
|-|-|-|
|`<leader>0`|Toggle relative line numbers|N/A|
|`<leader> `|Turn off search highlight|N/A|
|`<A-j>`|(Visual mode) move selected lines down|N/A|
|`<A-k>`|(Visual mode) move selected lines up|N/A|
|`<C-W>>`|Increase window width by 20|N/A|
|`<C-W><`|Decrease window width by 20|N/A|
|`<C-W>+`|Increase window height by 10|N/A|
|`<C-W>-`|Decrease window height by 10|N/A|
|`<leader>c`|Comment out line/selection|N/A|
|`<leader>u`|Toggle undotree|undotree|


### File switching
| Key | Action | Plugin |
|-|-|-|
|`<leader>A`|Add file to Harpoon|harpoon|
|`<leader>s`|Toggle Harpoon menu|harpoon|
|`<leader>1`|Go to 1 in Harpoon|N/A|
|`<leader>2`|Go to 2 in Harpoon|N/A|
|`<leader>3`|Go to 3 in Harpoon|N/A|
|`<leader>ff`|Find file in workspace|telescope|
|`<leader>fg`|Find string in workspace|telescope|
|`<leader>fd`|Find diagnostics in workspace|telescope|

### LSP
| Key | Action | Plugin |
|-|-|-|
|`<leader>r`|Rename symbol|lsp-zero/builtin|
|`<leader>f`|Format|lsp-zero/builtin|
|`gr`|Find reference|telescope|
|`gd`|Find definition|telescope|
|`gi`|Find implementation|telescope|
|`<leader>vd`|View diagnostics of current file|telescope|
|`<leader>vs`|View symbols of current file|telescope|
|`<leader>vw`|View symbols of workspace|telescope|
|`<C-n>`|Trigger completion|N/A|
|`<C-e>`|Abort completion|N/A|
|`<A-j>`|Go down in completion menu|N/A|
|`<A-k>`|Go up in completion menu|N/A|

### Terminal
| Key | Action | Plugin |
|-|-|-|
|`<leader><C-\>`|Open Terminal|N/A|
|`<C-W>`|Go to normal mode if in terminal mode|N/A|
|`<C-\>`|Launch floating terminal in normal mode|vim-floaterm|