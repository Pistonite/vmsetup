# Task
[Task](https://taskfile.dev/) is a modern task runner written in Go. It allows configuration with YAML.

## Prerequisites
- [`dotbin`](./dotbin.md)

## Windows

1. Download [`task_windows_amd64.zip`](https://github.com/go-task/task/releases) from GitHub release. Store the download in `Downloads`
2. Extract the zip file
    ```powershell
    Expand-Archive -Path $env:USERPROFILE\Downloads\task_windows_amd64.zip -DestinationPath $env:USERPROFILE\dotbin\extra\portable\task
    ```

3. Configure link and alias
    ```powershell
    notepad $env:USERPROFILE\dotbin\extra\portable\link
    ```
    Add the following
    
    ```txt
    task/task.exe
    ```
    Then run

    ```powershell
    sudo dotbin-link
    ```

## Linux
1. Download the release binary
    ```bash
    sh -c "$(curl --location https://taskfile.dev/install.sh)" -- -d -b ~/dotbin/extra/portable/task
    ```
2. Configure Link
    ```bash
    echo "task/task" >> ~/dotbin/extra/portable/link
    sudo dotbin-link
    ```

