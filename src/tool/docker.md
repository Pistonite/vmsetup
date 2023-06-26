# Docker

Install docker from the official repository
```bash
sudo pacman -Syu docker
```

## Start docker service
```bash
sudo systemctl enable docker
sudo systemctl start docker
```

## Allow non-root users to run docker
Replace `USER` with your username (`piston` in my case)
```bash
sudo usermod -a -G docker USER
```
Then logout of the shell and login again to apply the changes

You should be able to run `docker info` without getting permission errors now.