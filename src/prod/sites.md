# Manage Sites

## Taskfile
Create a `Taskfile.yml` in your home directory.
```yaml
version: '3'

# Add environment variables
#env:
#  FOO: BAR
  
tasks:
  restart:
    desc: Reset the permissions and restart the nginx service
    cmds:
      - chown -R www:www /etc/nginx
      - chmod -R 600 /etc/nginx
      - chmod -R 400 /etc/nginx/certs
      - systemctl restart nginx
  enable:
    desc: Enable a site (-- SITE)
    cmds:
      - ln -s '/etc/nginx/sites-available/{{.CLI_ARGS}}.conf' '/etc/nginx/sites-enabled/{{.CLI_ARGS}}.conf'
  disable:
    desc: Disable a site (-- SITE)
    cmds:
      - unlink '/etc/nginx/sites-enabled/{{.CLI_ARGS}}.conf'
  list:
    desc: List all sites
    cmds:
      - ls /etc/nginx/sites-available
```

Then, lock it down so only the current user can read/write it
```bash
USER=$(whoami)
sudo chown $USER:$USER /home/$USER/Taskfile.yml
sudo chmod 600 /home/$USER/Taskfile.yml
```

Now, it should be (relatively) safe to store secrets in the `Taskfile.yml`.

