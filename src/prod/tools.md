# Tools

First we will install all the tools
needed to manage the server.

Make sure the outbound firewall rules are
disabled during the install.

## Arch Packages
```bash
sudo pacman -S base-devel nginx docker reflector
```

## Rust
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Task
```bash
sudo sh -c "$(curl --location https://taskfile.dev/install.sh)" -- -d -b /usr/local/bin
```

## Magnesis
Magnesis is my tool for downloading GitHub Action artifacts
```bash
cargo install magnesis --git https://github.com/Pistonite/magnesis
```

:::danger
Remember to re-enable the outbound firewall rules after the install.
:::
