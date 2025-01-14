# Neovim
Neovim is my editor of choice for rapid-race development.

## Dependencies
Install the following dependencies from cargo
```bash
cargo install ripgrep websocat fd-find
```

## Install
:::warning
[`zig`](./zig.md) is strongly strongly recommended for Windows for compiling treesitter,
as it is a C-compatible compiler. Otherwise you need to figure out how
to make MSVC available through the command line, which is not convenient.
:::
Arch Linux:
   1. `nvim` should be bootstrapped during the full install. If not, you can install with
      ```bash
      sudo pacman -Syu neovim
      ```
   2. Setup aliases
      ```bash
      echo "alias=vi,vim:which:nvim" >> ~/dotbin/extra/portable/link
      dotbin-link
      ```
Windows:
   1. Download the latest stable release from https://github.com/neovim/neovim/releases.
      Save `nvim-win64.zip` to the `Downloads` directory
   2. Extract it
      ```powershell
      rm -rf ~/dotbin/extra/portable/nvim-win64
      7z x -y ~/Downloads/nvim-win64.zip "-o$HOME/dotbin/extra/portable"
   3. Configure link
      ```powershell
      Add-Content -Path ~/dotbin/extra/portable/link -Value "alias=vi,vim:shim:nvim-win64/bin/nvim.exe`nshim:nvim-win64/bin/win32yank.exe`nshim:nvim-win64/bin/xxd.exe"
      sudo dotbin-link
      ```
      :::tip
      Run sudo dotbin-link --force for updating!
      :::
   4. Exclude `nvim` from Windows Defender.
      ```powershell
      Add-MpPreference -ExclusionPath ~/dotbin
      Add-MpPreference -ExclusionProcess nvim
      ```
      :::warning
      Run as admin!
      :::
:::warning
Verify installation with
```bash
nvim --version
```
:::

## Packer
Package manager for Neovim
- Windows:
   ```powershell
   rm -rf $env:LOCALAPPDATA\nvim-data
   mkdir -p "$env:LOCALAPPDATA\nvim-data\site\pack\packer\start"
   git clone https://github.com/wbthomason/packer.nvim "$env:LOCALAPPDATA\nvim-data\site\pack\packer\start\packer.nvim"
   ```
- Arch Linux:
   ```bash
   yay -Syu nvim-packer-git
   ```

## Config
:::info
I made my configs from 2 tutorials:
- [ThePrimeagen's setup](https://www.youtube.com/watch?v=w7i4amO_zaE)
- [Santiago's setup](https://rsdlt.github.io/posts/rust-nvim-ide-guide-walkthrough-development-debug/)

(And of course copying from the examples provided by the plugins)
:::
:::warning
Make sure to setup `dotbin` for getting the config
:::

```bash
dotbin-cfg nvim
```
:::info
To copy the config in the other direction (i.e. from the local machine to `dotbin/dotconfig`)
```bash
dotbin-cfg nvim --reverse
```
:::

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

## Integration Config
There are certain integration options that can be configured in `nvim/lua/integrations.lua`. 
(The `nvim` directory is in `~/.config` on Linux and `%LOCALAPPDATA%` on Windows). These options
enable small differences in machines and won't be overwritten when pulling new config changes.

## Yank to host clipboard
`dotbin` has a utility `wsclip` that starts a websocket server that copies inbound messages into clipboard.
This is useful for copying text from headless VM to the host. All you need is setup
```bash
export HOST_MACHINE_IP=192.168.xxx.xxx
```

You can see the autocommand in `lua/keys.lua` that uses `websocat` to send it over to the host. On windows, it uses powershell's `Set-Clipboard` command so you don't need to do extra setup.

Currently, it doesn't support copying directly from Linux to system clipboard. This should change when I get a real Linux machine.

## Update
To update the config, run the configuration script again
```bash
dotbin-cfg nvim
```

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
- See [here](https://github.com/Pistonite/dotbin/blob/main/dotconfig/nvim/lua/keys.lua) for the raw key mappings

## Language-specific LSP Setups
### Works out-of-box with Mason
The following should work mostly out-of-box when installing through Mason:
- Rust: `rust-analyzer`
- TypeScript/ECMAScript: `typescript-language-server` and `eslint-lsp`
- Python: `pyright`

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
:::danger
This configuration is experimental and unstable
:::
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
