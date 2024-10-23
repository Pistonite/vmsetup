# Git
Git should already be installed on Linux or as part of `dotbin` on Windows (or your own installation).

:::warning
On Windows, set up [`Environment`](../windows/env.md) before doing this!
:::

## Editor
```bash
git config --global core.editor nvim
```

## Line Endings
```bash
git config --global core.autocrlf false
```

## User
Replace `Your Name` and `Your Email` with your name and email.
```bash
git config --global user.name "Your Name"
git config --global user.email "Your Email"
```

## SSH
I use SSH with GitHub. If you don't, you can skip this section.
```bash
ssh-keygen -t ed25519
```
Then
```bash
cat ~/.ssh/id_ed25519.pub
```
Copy the output and add it to your GitHub account in `Settings` > `SSH and GPG Keys` > `New SSH Key`
