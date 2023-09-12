# vmsetup
Guide for setting up a dev environment with Arch Linux on Hyper-V with no GUI (SSH only)

This README is for setting up the Repo. Visit https://vmsetup.pistonite.org to see the guide.

## Tools
The following tools need to be manually installed
- [Task](https://taskfile.dev) to run commands
  - If installing from AUR, the package/binary is `go-task` instead of `task` (I alias it)
- [Bun](https://bun.sh) as package manager
- [Rust](https://rustup.rs) for installing additional tools

## Commands

Install dependencies
```
task i
```
Local dev:
```
task dev
```
Local build:
```
task build
```

Site will be deployed automatically on pushes to `main` branch.
