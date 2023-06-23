# Conclusion
You have successfully installed Arch Linux on Hyper-V!

To Start/Stop the VM, you can use Hyper-V Manager. Or use the `Start-VM` and `Stop-VM` commands in Powershell. Learn more about Hyper-V commands [here](https://docs.microsoft.com/en-us/powershell/module/hyper-v/?view=win10-ps).

To login from Windows, you can use the built-in SSH client in Powershell:
```
ssh <user>@<IP>
```
or use SSH key if you have that setup:
```
ssh -i <path/to/key> <user>@<IP>
```

Next I will be setting up development tooling that I use. You can follow along if you are interested.