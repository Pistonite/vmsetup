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