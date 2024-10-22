# Hyper-V
Setting up virtual machines in Hyper-V Manager.

I use a Arch Linux VM on Windows for development. However,
these steps should apply to creating any VM.

:::info
Host machine environment this guide is tested on:
- AMD Ryzen 9 5950X
- Hyper-V Manager 10.0.22621.1
- Powershell `$PSVersionTable`:
  ```
  PSVersion                      7.5.0-preview.5
  PSEdition                      Core
  GitCommitId                    7.5.0-preview.5
  OS                             Microsoft Windows 10.0.26120
  Platform                       Win32NT
  PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0…}
  PSRemotingProtocolVersion      2.3
  SerializationVersion           1.1.0.1
  WSManStackVersion              3.0
  ```
:::

## Windows Features
Search "features" in the start menu and open "Turn Windows features on or off". Enable the following features:
- Hyper-V
- Virtual Machine Platform
- Windows Hypervisor Platform

Restart your machine after enabling these features.

::: warning
Turning on Hyper-V and Windows Hypervisor Platform will prevent 
3rd party softwares like VirtualBox to use hardware virtualization.
They will have a HEAVY performance hit.
:::

