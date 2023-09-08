# HTTPS
Sometimes you need to test web features that are only available in secure context.
This section covers how to setup https in selected tools with a certificate.

This page is partially adopted from https://oak.dev/2021/02/03/create-a-self-signed-certificate-on-windows-for-local-development/#:~:text=Create%20a%20Self-signed%20Certificate%20on%20Windows%20for%20Local,and%20key%20...%205%20Step%205%3A%20Test%20

## Create a Certificate
Follow [these steps](../windows/cert.md) to create a self-signed certificate on the Windows Host
and send it to the VM

## Vite
To use https in vite dev server, follow the following steps.
You should have `openssl` already installed. 

Run the following. Replace `cert.pfx` with the path of the certificate.
Also change the output paths if needed.
```bash
openssl pkcs12 -in cert.pfx -nocerts -out cert-key.pem -nodes
openssl pkcs12 -in cert.pfx -nokeys -out cert.pem
```
Enter the password you made when exporting the certificate when prompted.

Now add the `server.https` option to `vite.config.ts`
```typescript
export default defineConfig({
  server: {
    https: {
      key: '/path/to/cert-key.pem',
      cert: '/path/to/cert.pem',
    }
  },
  plugins: [
    ...
  ],
  resolve: {
    ...
  },
});
```

Run `npm run dev -- --host`, and the console should give you `https` urls.

In your host, go to `https://<domain>:5173` and you should see the browser is happy with the certificate.
:::warning
Firefox will still warn you about self-signed certificate.
:::

Finally open the devtool and type `isSecureContext` in the console. It should be `true`.
