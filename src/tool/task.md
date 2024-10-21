# Task
[Task](https://taskfile.dev/) is a modern task runner written in Go. It allows configuration with YAML.


:::warning
I use `x` as alias for `task`. If you don't want it, remove the `alias=x:` part from the link config
:::
## Windows

1. Download [`task_windows_amd64.zip`](https://github.com/go-task/task/releases) from GitHub release. Store the download in `Downloads`
2. Extract the zip file
    ```powershell
    7z x -y ~/Downloads/task_windows_amd64.zip "-o$HOME/dotbin/extra/portable/task"
    ```

3. Configure link and alias
    ```powershell
    Add-Content -Path ~/dotbin/extra/portable/link -Value "alias=x:task/task.exe"
    sudo dotbin-link
    ```

## Linux
1. Download the release binary
    ```bash
    sh -c "$(curl --location https://taskfile.dev/install.sh)" -- -d -b ~/dotbin/extra/portable/task
    ```
2. Configure link and alias
    ```bash
    echo "alias=x:task/task" >> ~/dotbin/extra/portable/link
    dotbin-link
    ```

