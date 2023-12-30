# Generate a python script to download nvim config dir

import os

SCRIPT = """
import os
import sys
import requests
import shutil

if sys.platform == "win32":
    NVIM_HOME = "~\\\\AppData\\\\Local\\\\nvim"
else:
    NVIM_HOME = "~/.config/nvim"
NVIM_HOME = os.path.expanduser(NVIM_HOME)

def mkdir(path):
    os.makedirs(path, exist_ok=True)

def download_config(path):
    url = f"https://vmsetup.pistonite.org/home/.config/nvim/{path}"
    print(f"Downloading {url}")
    res = requests.get(url)
    if not res.ok:
        print(f"Failed to download {url}")
        exit(1)
    file_path = os.path.join(NVIM_HOME, path)
    mkdir(os.path.dirname(file_path))
    with open(file_path, "wb") as f:
        f.write(res.content)

def main(paths):
    vim_path = os.path.join(os.path.dirname(NVIM_HOME), ".vim")
    mkdir(vim_path)
    if os.path.exists(NVIM_HOME):
        if input(f"{NVIM_HOME} already exists, overwrite? [y/N] ").lower() != "y":
            exit(1)
        shutil.rmtree(NVIM_HOME)
    for path in paths:
        download_config(path)
    
if __name__ == "__main__":
"""

CONFIG_DIR = "src/public/home/.config/nvim"
PATHS = []
for root, _, files in os.walk(CONFIG_DIR):
    for name in files:
        path = os.path.join(root, name).replace(CONFIG_DIR+"/", "")
        PATHS.append(path)

PATHS = ",\n        ".join([ f"\"{path}\"" for path in sorted(PATHS) ])
INVOKE = f"    main([\n        {PATHS}\n    ])"

print(SCRIPT)
print(INVOKE)
