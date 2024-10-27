# Docker
Run a monolith website inside a docker container

## Enable Docker
```bash
sudo systemctl enable docker
sudo systemctl start docker
```

## Overview
For the example, assume the domain is `pistonite.app` and the subdomain/sitename
is `example`. Also, assume the docker image is `pistonite/example` and the container
will run on port `5001`

## Setup Tasks
Create tasks to manage sites with docker
```yaml
tasks:
  # ... other tasks
  docker-pull:
    cmds:
      - mkdir -p '/opt/pistonite/{{.SITE}}'
      - touch '/opt/pistonite/{{.SITE}}/.env'
      - docker pull '{{.IMAGE}}'
      - docker tag '{{.IMAGE}}' '{{.SITE}}:deploy'

  docker-run:
    cmds:
      - chown -R root:root '/opt/pistonite/{{.SITE}}'
      - chmod -R 600 '/opt/pistonite/{{.SITE}}'
      - docker container prune -f
      - docker run -d --name '{{.SITE}}' -p '{{.PORT}}:80' --env-file '/opt/pistonite/{{.SITE}}/.env' '{{.SITE}}:deploy'
      - docker image prune -a -f

```

## Add Site Commands
Create tasks to manage the site `example`
```yaml
tasks:
  # ... other tasks
  start:example:
    desc: Start `example`
    cmds:
      - task: docker-run
        vars:
          SITE: example
          PORT: 5001
  deploy:example:
    desc: Deploy `example`
    cmds:
      - task: docker-pull
        vars:
          IMAGE: pistonite/example:latest
          SITE: example
      - docker stop example
      - task: start:example
```

## Environment Variables
Environment variables can be configured in the `/opt/pistonite/example/.env` file
```
FOO=BAR
MY_SECRET=SECRET
```

## Nginx Config
Create config file, replace `example` with the site name
```bash
sudo nvim /etc/nginx/sites-available/example.conf
```
Then paste in the following template and change as needed
```nginx
server {
    listen              443 ssl;
    server_name         example.pistonite.app;

    ssl_protocols       TLSv1.2 TLSv1.3;

    # Enable gzip if the web server doesn't have built-in compression
    gzip                on;
    gzip_min_length     1000;
    gzip_types          text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/gif image/jpeg image/png image/svg+xml image/tiff image/webp;
    gzip_disable        "msie6";

    # Cross Origin Isolation?
    #add_header Cross-Origin-Opener-Policy   same-origin;
    #add_header Cross-Origin-Embedder-Policy require-corp;

    # Cache?
    #add_header Cache-Control max-age=604800;

    location / {
        proxy_pass http://localhost:5001;
    }

}

```

## Enable the Site
First run `deploy:example`, which will pull the image, but fail to stop the previous container because it doesn't exist
```bash
sudo task deploy:example
```
Then start the container and enable the site
```bash
sudo task start:example
sudo task enable -- example
sudo task restart
```

## Operations
To deploy newer image tagged `latest`
```bash
sudo task deploy:example
```
:::tip
This will pull the image, stop the old container, start a new container, and remove old container and images
:::
To restore the previous version, change the `IMAGE` in the deploy task, and re-run the deploy task
