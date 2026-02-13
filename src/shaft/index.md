[Shaft](https://github.com/Pistonite/shaft)
is my personal tool for setting up tools with configurations.

## Rust
The Rust Toolchain is required for installing Shaft.

On Windows, install [MSVC](https://visualstudio.microsoft.com/downloads/)
by downloading and installing `Visual Studio Build Tools` - NOT
the IDE. Finally download the installer from [https://rustup.rs](https://rustup.rs).

On Linux, run the install script:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Install Shaft
Linux: Run the script
```
mkdir -p ~/.config/pistonite-shaft
cd ~/.config/pistonite-shaft
git clone https://github.com/Pistonite/shaft repo
cd repo
cargo run --bin shaft-build --locked
cargo build --bin shaft --release --locked
cd 
mv ~/.config/pistonite-shaft/repo/target/release/shaft ~/shaft
mv ~/.config/pistonite-shaft/repo ~/.config/shaft-repo
```

Then run `~/shaft`, accept the default `.config/pistonite-shaft`
as `SHAFT_HOME`. Follow the instructions to setup.
After setup is succesful, running `~/shaft` should display the help menu.

Then:
```
mv ~/.config/shaft-repo ~/.config/pistonite-shaft/repo
~/shaft upgrade
rm ~/shaft
```

