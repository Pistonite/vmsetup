# Prerequisites

Host machine environment this guide is tested on:
- AMD Ryzen 9 5950X
- Windows 11 Pro 22621.1848
- Hyper-V Manager 10.0.22621.1
- Powershell `$PSVersionTable`:
  ```
  PSVersion                      5.1.22621.1778
  PSEdition                      Desktop
  PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}
  BuildVersion                   10.0.22621.1778
  CLRVersion                     4.0.30319.42000
  WSManStackVersion              3.0
  PSRemotingProtocolVersion      2.3
  SerializationVersion           1.1.0.1
  ```

## Windows Features
Search "features" in the start menu and open "Turn Windows features on or off". Enable the following features:
- Hyper-V
- Virtual Machine Platform
- Windows Hypervisor Platform

Restart your machine after enabling these features.

::: warning
Turning on Hyper-V and Windows Hypervisor Platform will prevent 3rd party softwares like VirtualBox to use hardward virtualization. They will have a HEAVY performance hit.
:::

