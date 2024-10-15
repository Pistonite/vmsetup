# Git
Git should already installed on most Linux systems, but we need to configure it.

On Windows, install it from https://git-scm.com/downloads/win

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
