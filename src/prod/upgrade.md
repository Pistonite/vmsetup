# System Upgrade
Keep system up to date is good for security.

## Update Mirrors
```bash
sudo reflector --protocol https --latest 20 --sort rate --save /etc/pacman.d/mirrorlist
```

## Update Database
```bash
sudo pacman -Syy
```

## Upgrade System
```bash
sudo pacman -Syu
```
