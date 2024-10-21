# Rust
The Rust toolchain is needed for building tools and development for most projects.

## Windows
Download the installer from https://rustup.rs/ and run it with the default option, which installs to `C:\Users\<username>\.cargo`

## Linux
Run the following command and use the default options
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Extensions
:::warning
Restart the shell to load the environment
:::

Install these `cargo` extensions, which are used by some of my projects (and are generally useful)
```bash
cargo install cargo-binstall cargo-info cargo-watch cargo-expand cargo-get cargo-edit
```

## Utilities
These are simple rust-based utilities that are useful, but not required
```bash
cargo install eza bat du-dust
```

| Package | Description | Link |
|-|-|-|
| `eza` | `ls` but better | https://github.com/eza-community/eza |
| `bat` | `cat` with wings | https://github.com/sharkdp/bat |
| `du-dust` | Replacement for `du` | https://github.com/bootandy/dust |

I typically replace `ls` with `eza`, and use `bat`/`dust` directly.
The `dotbin` setup will automatically use `eza` for the `ls` shim if found.
On Linux, you can add the following to `.bashrc`:
```bash
alias ls="eza"
```