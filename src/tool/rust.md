# Rust
Install the Rust toolchain, which is needed for building tools and development for most projects.

## Windows
Download the installer from https://rustup.rs/ and run it

## Linux
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Enter `1` and hit Enter to install to the default locations

After install, load the environment with
```bash
source ~/.cargo/env
```

## Extensions
Install these `cargo` extensions, which are used by some of my projects (and are generally useful)
```bash
cargo install cargo-binstall cargo-info cargo-watch cargo-expand
```