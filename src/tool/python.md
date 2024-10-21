# Python
Python is already installed with [`dotbin`](./dotbin.md) as a general-purpose
script interpreter. However, it can also be used to run python projects.
In those cases, we often create a virtual environment to avoid installing thousands of packages to the global environment

## Create a virtualenv
In the Python project, run the following to create a virtual environment based on the current `python` executable
```bash
python -m venv venv
```
It might also be a good idea to add `venv` to `.gitignore`

## Activate venv
It is important to activate the virtual environment before working on the project.
- Windows: `epyvenv` is added as a script by `dotbin`
- Linux: `epyvenv` should be set as an alias during `dotbin` setup
Running `epyvenv` once will activate the virtual environment at `./venv`. You can run `deactivate` to exit it.

:::danger
There are projects which ship a "bootstrapper" that automatically installs
dependencies if not found. While this is good for general users who aren't familiar with python to be able to easily run the project, it's devastating 
for me who sometimes forget to run `epyvenv`.

This scenario can be mitigated by inserting this code into the entrypoint for those projects
```python
import sys
if not sys.executable.endswith("venv/bin/python") and not sys.executable.endswith("venv\\bin\\python"):
    raise AssertionError("You are not in the virtual environment!!!!!")
```
:::

## Deleting venv
Remember to first deactivate the venv, then simply delete the `venv` directory.
