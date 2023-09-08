# SSL Certificate
Sometimes you need to test web features that are only available in secure context.
This section covers how to create a self-signed certificate trusted by the Windows Host, that the VM can then use to host
a development server with https.

This page is partially adopted from https://oak.dev/2021/02/03/create-a-self-signed-certificate-on-windows-for-local-development/#:~:text=Create%20a%20Self-signed%20Certificate%20on%20Windows%20for%20Local,and%20key%20...%205%20Step%205%3A%20Test%20
:::tip
The link is really helpful with images, if you don't like the text-only version below
:::

## Create a Certificate
Run Powershell as administrator. Replace `pistonite.local` below with the domain name of your choice.
```powershell
New-SelfSignedCertificate -CertStoreLocation Cert:\LocalMachine\My -DnsName "pistonite.local" -FriendlyName "pistonite.local" -NotAfter (Get-Date).AddYears(100)
```

Now follow the following steps:
1. Open Management Console for Certificates. Search for "Certificates" in the Start Menu.
2. In the left panel, click on `Certificates - Local Computer` > `Personal` > `Certificates`
3. Find the certificate you just created (looked for the domain name), then right click and select copy
4. In the left panel, click on `Trusted Root Certification Authorities`, then right click `Certificates` and select `paste`
5. Go back to the certificate in `Personal`, right click and select `All Tasks` > `Export...`
6. Select `Yes` to export private key. Click `Next`.
7. Select `.PFX` format and keep default values. Click `Next`.
8. Check the password box, and type a password (don't forget this).
9. Select a location and finish the export.

## Edit hosts file
Now we need to edit the host file so that the domain name above resolves to the VM.

Edit `C:\Windows\system32\drivers\etc\hosts` and add the following. Replace the IP address with the VM IP address and the domain name with the one you
used for the certificate.
```
192.168.0.4 pistonite.local
```
:::tip
Run `ip address` in the VM to find the IP address of the VM
:::

## Send the Certificate to VM
You can use `scp` to do that, which is available in windows. Replace `<user>` with the VM user.
```powershell
scp cert.pfx <user>@pistonite.local:/home/<user>
```
:::tip
If you disabled password auth, you need to use `-i <key>` in the same way as `ssh`
:::

## Next steps
Follow [these steps](../tool/cert.md) to see how you might want to use the certificate on the VM side
