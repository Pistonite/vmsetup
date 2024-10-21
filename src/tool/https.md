# HTTPS
Sometimes you need to test web features that are only available in secure context.
Usually it's fine with `localhost`, but if the local development server is hosted from a VM,
then the browser will not trust the IP address of the VM by default.

We can work around that using a self-signed certificate.
:::danger
Since your computer trusts the self-signed certificate, exposing it may cause issues! 
:::

This page is partially adopted from [here](https://oak.dev/2021/02/03/create-a-self-signed-certificate-on-windows-for-local-development/#:~:text=Create%20a%20Self-signed%20Certificate%20on%20Windows%20for%20Local,and%20key%20...%205%20Step%205%3A%20Test%20)

## Edit hosts
:::warning
In the example, we are using `pistonite.local` as the domain name!
:::
1. Open `hosts` file
    ```powershell
    sudo notepad C:\Windows\system32\drivers\etc\hosts
    ```
2. Add the following, replace the IP address with the address of the VM, and the domain with the domain of your choice
    ```
    # Trusted Local VM
    192.168.0.4 pistonite.local
    ```
    :::tip
    Run `ip address` in the VM to find the IP address of the VM
    :::
3. Save and exit

## Create and export a Certificate
1. Create the certificate
  ```powershell
  $domain="pistonite.local"
  sudo pwsh -c {New-SelfSignedCertificate -CertStoreLocation Cert:\LocalMachine\My -DnsName $domain -FriendlyName $domain -NotAfter (Get-Date).AddYears(100)}
  ```
2. Open Management Console for Certificates. Search for "Certificates" in the Start Menu.
3. In the left panel, click on `Certificates - Local Computer` > `Personal` > `Certificates`
4. Find the certificate you just created (looked for the domain name), then right click and select copy
5. In the left panel, click on `Trusted Root Certification Authorities`, then right click `Certificates` and select `paste`
6. Go back to the certificate in `Personal`, right click and select `All Tasks` > `Export...`
7. Select `Yes` to export private key. Click `Next`.
8. Select `.PFX` format and keep default values. Click `Next`.
9. Check the password box, and type a password (don't forget this).
10. Select a location and finish the export to `cert.pfx`

## Send the Certificate to VM
Copy `cert.pfx` to the VM's home directory
```powershell
$user="piston" #your username
scp -i <key> cert.pfx "$user@$domain:/home/$user"
```

## Extract Certificate in VM
Login to the VM and run:
```bash
mkdir -p ~/.cert
openssl pkcs12 -in ~/cert.pfx -nocerts -out ~/.cert/key.pem -nodes
openssl pkcs12 -in ~/cert.pfx -nokeys -out ~/.cert/cert.pem
```
Enter the password you used when creating the certificate

Now, you can delete the `pfx` file
```bash
rm ~/cert.pfx
```

## Settingup HTTPS in tools
### Vite Dev Server
Create the following section in `vite.config.ts`
```typescript
// @ts-expect-error @types/node
import fs from "fs";
// @ts-expect-error @types/node
import os from "os";

const https = () => {
  try {
    const home = os.homedir()+"/.cert";
    const key = home+"/key.pem";
    const cert = home+"/cert.pem";
    if (fs.existsSync(key) && fs.existsSync(cert)) {
        return { key, cert };
    }
  } catch (e) {
      // ignore
  }
  return undefined;
};
```
Then add to `server.https`:
```typescript
export default defineConfig({
  server: {
    https: https()
  },
  ... // rest of config
});
```

Run `npm run dev -- --host`, and the console should give you `https` urls.

In your host, go to `https://<domain>:5173` and you should see the browser is happy with the certificate.
:::warning
Firefox will still warn you about self-signed certificate.
:::

Finally open the devtool and type `isSecureContext` in the console. It should be `true`.

### Server Application
For the local development of server, the path of the certificate should be passed in as environment variables, so for production environment, a real certificate can be used or TLS can be disabled.

Reference implementation in Go (Fiber framework):
```go
package main

import (
	  "github.com/gofiber/fiber/v2"
)
func main() {
    app := fiber.New()
    err := app.ListenTLS(":3000", "/path/to/cert.pem", "/path/to/key.pem")
    log.Fatal(err)
}
```