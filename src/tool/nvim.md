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
If you have GitHub Copilot, run the following to set it up
```vim
:Copilot setup
```
Then follow on-screen instructions.

You can use `:Copilot status` to check at anytime if it is enabled

## Yank to host clipboard
Since the VM is headless, there's no clipboard provider to support the `+` register. So I made a simple python program [`ws-clipboard`](https://github.com/Pistonight/ws-clipboard) that starts a websocket server and stores whatever it receives into the clipboard.

You can see the autocommand in `lua/keys.lua` that uses `websocat` to send it over to the host. On windows, it uses powershell's `Set-Clipboard` command so you don't need to do extra setup.

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
|`<leader>w`|Switch left and right (rotate buffer positions)|N/A|
|`<leader>c`|Comment out line/selection|N/A|
|`<leader>u`|Toggle undotree|undotree|
|`<leader>y`|Yank selection to host clipboard|N/A|
|`<leader>vg`|Grep in opened files|telescope|
|`<leader>gs`|Git status|telescope|


### File switching
| Key | Action | Plugin |
|-|-|-|
|`<leader>A`|Add file to Harpoon|harpoon|
|`<leader>s`|Toggle Harpoon menu|harpoon|
|`<leader>1`|Go to 1 in Harpoon|N/A|
|`<leader>2`|Go to 2 in Harpoon|N/A|
|`<leader>3`|Go to 3 in Harpoon|N/A|
|`<leader>ff`|Find file in workspace|telescope|
|`<leader>gg`|Find git files|telescope|
|`<leader>fg`|Find string in workspace|telescope|
|`<leader>fd`|Find diagnostics in workspace|telescope|
|`<leader>fb`|Find file in opened files|telescope|

### LSP
| Key | Action | Plugin |
|-|-|-|
|`<leader>r`|Rename symbol|lsp-zero/builtin|
|`<leader>f`|Format|lsp-zero/builtin|
|'K'| Hover action|builtin|
|`gr`|Find reference|telescope|
|`gd`|Find definition|telescope|
|`gt`|Find type of symbol under cursor|lsp-zero/builtin|
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
|`<C-W>`|Go to normal mode if in terminal mode|N/A|
|`<leader><C-\>`|Open new terminal|vim-floaterm|
|`<C-\>`|Toggle floating terminal | vim-floaterm|
[`<C-n>`|Cycle through floating terminals |vim-floaterm|
