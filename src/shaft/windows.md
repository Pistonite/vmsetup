
## Terminal Setup
This will setup:
- PowerShell 7 (Preview)
- Clink
- Windows Terminal
- Starship

Run thw following until you don't get any errors
```
shaft sync pwsh terminal starship
```

## Coreutils and Shellutils
This will populate your Windows with most utils that are on GNU Linux.
```
shaft sync coreutils shellutils
```
This will also install `Git`, where we borrow some utils from MinGW
when it's too complicated to set it up natively.

## Editor Setup
We will install Neovim. `Python` and `Node` are dependencies:
```
shaft sync python
shaft sync node
```

Finally
```
shaft sync nvim
```

Then, run `vi`, the plugins will be installed automatically.

