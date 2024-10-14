import subprocess
import sys
import os
from multiprocessing import Pool, cpu_count

def install_cargo_binstall():
    result = subprocess.run(["cargo", "install", "binstall"])
    if result.returncode != 0:
        raise Exception("Failed to install binstall, please check Rust toolchain installation")

def install_coreutils():
    result = subprocess.run(["cargo", "binstall", "coreutils"])
    if result.returncode != 0:
        print("Failed to install coreutils, trying to install binstall")
        install_cargo_binstall()
        result = subprocess.run(["cargo", "binstall", "coreutils", "--no-confirm"])

        if result.returncode != 0:
            raise Exception("Failed to install coreutils, please check Rust toolchain installation")

def get_coreutils():
    args = []
    result = subprocess.run(["coreutils", "--list"], check=True, capture_output=True)
    for line in result.stdout.decode().splitlines():
        line = line.strip()
        # See https://github.com/uutils/coreutils/blob/main/build.rs#L60
        if line == "[":
            args.append("test")
        elif line in (
                    "md5sum", 
                "sha1sum", 
                "sha224sum", 
                "sha256sum", 
                "sha384sum", 
                "sha512sum", 
                "sha3sum", 
                "sha3-224sum", 
                "sha3-256sum", 
                "sha3-384sum", 
                "sha3-512sum", 
                "shake128sum", 
                "shake256sum", 
                "b2sum", 
                "b3sum"):
            args.append("hashsum")
        else:
            args.append(line)

    return list(set(args))

def get_ps_profile_dir():
    result = subprocess.run(["pwsh", "-NoLogo", "-NoProfile", "-Command", "& { echo $PROFILE.CurrentUserCurrentHost }"], check=True, capture_output=True)
    return os.path.dirname(result.stdout.decode().strip())

def is_alias(command):
    result = subprocess.run(["pwsh", "-NoLogo", "-NoProfile", "-Command", "& { Test-Path Alias:"+command+" }"], capture_output=True)
    if result.returncode == 0 and result.stdout.decode().strip() != "False":
        return "alias"
    result = subprocess.run(["pwsh", "-NoLogo", "-NoProfile", "-Command", "& { Get-Command "+command+" }"], capture_output=True)
    if result.returncode == 0:
        return "command"
    return None

def is_alias_multi(command):
    return is_alias(command), command

def create_profile(coreutils, optimize):
    dir = get_ps_profile_dir()
    print(f"Creating profile in {dir}")
    os.makedirs(dir, exist_ok=True)
    if optimize:
        to_add = set()
        with Pool() as p:
            for add, util in p.imap_unordered(is_alias_multi, coreutils):
                if add is not None:
                    to_add.add((add, util))
    else:
        to_add = set(coreutils)
    print("Adding overrides for", to_add)
    with open(os.path.join(dir, "Initialize-Coreutils.ps1"), "w") as f:
        f.write("# This file is generated by replace-coreutils.py\n")
        for typ, util in sorted(to_add):
            if typ == "alias":
                f.write(f"if (Test-Path Alias:{util}) {{ Remove-Item Alias:{util} -Force }}\n")
            else:
                f.write(f"Set-Alias -Name {util} -Value {util}.exe \n")

def get_install_command(util):
    return ["cargo", "install", f"uu_{util}"]

def install_util(util):
    command = get_install_command(util)
    result = subprocess.run(command, capture_output=True)
    return (util, result.returncode)

def main():
    install_coreutils()
    coreutils = get_coreutils()
    coreutils.sort()

    l = len(coreutils)
    print(f"Installing {l} coreutils")

    cpus = cpu_count() // 8
    if cpus <= 1:
        for i, util in enumerate(coreutils):
            _, returncode = install_util(util)
            print(f"[{i}/{l}] Installed {util}")
            if returncode != 0:
                print(f"Failed to install {util}")
                sys.exit(1)
    else:
        with Pool(cpus) as p:
            for i, (util, returncode) in enumerate(p.imap_unordered(install_util, coreutils)):
                print(f"[{i}/{l}] Installed {util}")
                if returncode != 0:
                    print(f"Failed to install {util}")
                    sys.exit(1)
    
    print(f"[{l}/{l}] Done!")

    optimize = len(sys.argv) <= 1 or sys.argv[1] != "--no-optimize"
    if optimize:
        print("Optimized mode: Only generating overrides for aliases that currently exists for faster startup")

    create_profile(coreutils, optimize)
    print()

    print(f"Add `. $PSScriptRoot\\Initialize-Coreutils.ps1` to your PowerShell profile to enable the coreutils")

if __name__ == "__main__":
    main()
