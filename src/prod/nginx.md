# Nginx
Create basic config for `nginx`, without any sites yet.

## Create `www` user
First create a user that will own the nginx files, and set the permissions
so only that user can read/write the files.
```bash
sudo useradd --system -s /usr/bin/nologin www -U
sudo chown -R www:www /etc/nginx
sudo chmod -R 600 /etc/nginx
```

## Store Certificate
Assume you have a certificate file `foo.com.pem` and key file `foo.com.key`,
where `foo.com` is the site name.

Create the certificate file, and paste in the contents of the certificate and key.
```bash
sudo mkdir /etc/nginx/certs
sudo nvim /etc/nginx/certs/foo.com.pem
sudo nvim /etc/nginx/certs/foo.com.key
```
:::danger
Make sure to clear clipboard history/data after pasting in the key!
:::

Then, lock it down so only the `www` user can read it.
```bash
sudo chown -R www:www /etc/nginx/certs
sudo chmod -R 400 /etc/nginx/certs
```

## Base Config

Open the config file
```bash
sudo nvim /etc/nginx/nginx.conf
```
Paste in the following:
```nginx
user www;
worker_processes  auto;

events {
    multi_accept          on;
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    # Set Certificate
    ssl_certificate     /etc/nginx/certs/pistonite.org.pem;
    ssl_certificate_key /etc/nginx/certs/pistonite.org.key;
    # Reuse SSL sessions
    ssl_session_cache   shared:SSL:10m;
    ssl_session_timeout 10m;

    keepalive_timeout  70;

    include sites-enabled/*;

    # Block default requests
    server {
        listen  443  default_server;
        server_name  _;
        return 444;
    }
}
```

## Enable Service
Enable and start the `nginx` service.
```bash
sudo systemctl enable nginx
sudo systemctl start nginx
```
:::tip
If `nginx` fails to start, you can debug with `sudo nginx -t`
:::

## Firewall
Define firewall rules for port 80 and 443
for your desired traffic.

For example, since I use Cloudflare,
I will only allow the [IPs for Cloudflare](https://www.cloudflare.com/ips/)
and IP addresses for other necessary services
to access my server.
