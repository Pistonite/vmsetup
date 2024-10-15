# Neovim
I made my configs from 2 tutorials:
- [ThePrimeagen's setup](https://www.youtube.com/watch?v=w7i4amO_zaE)
- [Santiago's setup](https://rsdlt.github.io/posts/rust-nvim-ide-guide-walkthrough-development-debug/)

(And of course copying from the examples provided by the plugins)

First, make sure you have installed `nvim` on the system:
- Windows: [Neovim](../windows/nvim.md)
- Linux: TODO

<!-- ## packer.nvim -->
<!-- Install `packer.nvim`, which is the plugin manager. -->
<!-- ```bash -->
<!-- yay -Syu nvim-packer-git -->
<!-- ``` -->
<!--  -->
<!-- ## Get the configs -->
<!-- My configs are on [GitHub](https://github.com/Pistonite/vmsetup/tree/main/src/public/home/.config/nvim) -->
<!--  -->
<!-- I made a script to `curl` them to the right places. If you want to use them, backup your existing configs -->
<!-- ```bash -->
<!-- mv ~/.config/nvim ~/.config/nvim.bak -->
<!-- ``` -->
<!-- Then download and run the script -->
<!-- ```bash -->
<!-- curl -o dl-nvim-config.py https://vmsetup.pistonite.org/dl-nvim-config.py -->
<!-- python dl-nvim-config.py -->
<!-- rm dl-nvim-config.py -->
<!-- ``` -->

## Install the plugins
Start neovim
```bash
nvim
```
You will see some errors because the plugins are not installed. It's OK. 
Press `Shift+G` to go to the bottom and `Enter` to continue. Then,
run the following command to install them
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
`dotbin` has a utility `wsclip` that starts a websocket server that copies inbound messages into clipboard.
This is useful for copying text from headless VM to the host. All you need is setup
```bash
export HOST_MACHINE_IP=192.168.xxx.xxx
```

You can see the autocommand in `lua/keys.lua` that uses `websocat` to send it over to the host. On windows, it uses powershell's `Set-Clipboard` command so you don't need to do extra setup.

Currently, it doesn't support copying directly from Linux to system clipboard. This should change when I get a real Linux machine.

## Update
To update the plugins/packages/tools, run
```
:PackerSync
```
After that, also update treesitter and Mason tools
```
:TSUpdate
:MasonUpdate
```

## Key mappings
- See [here](/home/.config/nvim/lua/keys.lua) for the raw key mappings

## Language-specific LSP Setups
### Works out-of-box with Mason
The following should work mostly out-of-box when installing through Mason:
- `rust-analyzer`
- `typescript-language-server
- `eslint-lsp`

### C/C++ (`clangd`)
1. Install it through Mason
2. Your build system must produce a `compile-commands.json`
3. Create `.clangd` in the root of the projects with the following, changing the path accordingly
   ```yaml
   CompileFlags:
     CompilationDatabase: ./path/to/directory/with/compile-commands.json
   ```
4. If additional configuration is needed, follow https://clangd.llvm.org/config.html#compileflags

### Java (`jdtls`)
1. DO NOT install it through Mason. Instead, download from https://download.eclipse.org/jdtls/milestones
2. Extract JDTLS from the download from step 1. Put it in some permanent location, then set the `ECLIPSE_JDTLS_HOME` variable to
that folder.
:::tip
I have a folder, say `E:\Eclipse` (on windows), that I put `jdtls` as well as all my jdks.
:::
3. You also need a decently new version of JDK. Install the latest from https://jdk.java.net/ or from package manager.
   At the time of writing, the latest is JDK 21
4. Set `ECLIPSE_JDK_HOME` to the JDK you will be using for JDTLS
:::tip
Both `ECLIPSE_JDTLS_HOME` and `ECLIPSE_JDK_HOME` are referenced in the nvim config, so the config can be cross-plat.
:::
5. For every runtime you want to use, set the `JDK<version>_HOME` to the path of the JDK. For example `JDK8_HOME` for `JavaSE-1.8` and
`JDK21_HOME` for `JavaSE-21`. JDTLS will detect the runtime to use from `.classpath`, then use this env to find the Java installation.
