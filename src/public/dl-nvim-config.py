
import os
import sys
import requests
import shutil

if sys.platform == "win32":
    NVIM_HOME = "~\\AppData\\Local\\nvim"
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

    main([
        "after/ftplugin/java.lua",
        "after/ftplugin/jdtls_wrapper.py",
        "after/plugin/harpoon.lua",
        "after/plugin/lsp-inlayhints.lua",
        "after/plugin/lsp-zero.lua",
        "after/plugin/lualine.lua",
        "after/plugin/nvim-comment.lua",
        "after/plugin/nvim-tree.lua",
        "after/plugin/nvim-treesitter-context.lua",
        "after/plugin/nvim-treesitter.lua",
        "after/plugin/telescope.lua",
        "after/plugin/undotree.lua",
        "after/plugin/vim-floaterm.lua",
        "after/plugin/vscode.lua",
        "init.lua",
        "lua/keys.lua",
        "lua/opts.lua",
        "lua/plugins.lua"
    ])
