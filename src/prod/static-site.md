# Static Site
Example of a site that serves static files

## Overview
For the example, assume the domain is `pistonite.app` and the subdomain/sitename is
`example`. Also, assume the site artifact is uploaded by a GitHub Action 
from repo `Pistonite/example`, and named `app`.

## Deploy and Restore Tasks with `magnesis`
:::info
You will need a fine-grained personal access token for download GitHub Action artifacts,
with a repository read access:
- Go to https://github.com/settings
- Click on Developer settings
- Click on Personal access tokens, select Fine-grained tokens
- Click on Generate new token
- Enter a name and expiration. The default permission should be fine
- Click on Generate token

Now, open `Taskfile.yml` and add the token to an environment variable
```yaml
env:
  GITHUB_TOKEN: YOUR_TOKEN
```
:::

Create tasks to deploy site with `magnesis` with backup and restore commands
```yaml
tasks:
  # ... other tasks
  magnesis-pull:
    cmds:
      - rm -rf '/opt/pistonite/{{.SITE}}.old'
      - mkdir -p '/opt/pistonite/{{.SITE}}'
      - mv '/opt/pistonite/{{.SITE}}' '/opt/pistonite/{{.SITE}}.old'
      - magnesis -o '/opt/pistonite/{{.SITE}}' --repo 'Pistonite/{{.SITE}}' {{.CLI_ARGS}}

  restore:
    cmds:
      - rm -rf '/opt/pistonite/{{.SITE}}'
      - cp -r '/opt/pistonite/{{.SITE}}.old' '/opt/pistonite/{{.SITE}}'

```

## Add Site Commands
Add new tasks for deploying the site `example`, and restoring it
```yaml
tasks:
  # ... other tasks
  deploy:example:
    desc: Deploy `example`
    cmds:
      - task: magnesis-pull
        vars:
          SITE: example
  restore:example:
    desc: Restore `example`
    cmds:
      - task: restore
        vars:
          SITE: example
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
        root  /opt/pistonite/example/app;
        index index.html;
    }

}

```

## Enable the Site
```bash
sudo task enable -- example
sudo task restart
```

## Operations
To deploy newer version
```bash
sudo task deploy:example -- --rev COMMIT_HASH
```
:::tip
`COMMIT_HASH` is the full SHA256 hash of the commit to deploy
:::
To restore the previous version
```bash
sudo task restore:example
```
