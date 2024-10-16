# Python
Python is already installed with [`dotbin`](./dotbin.md)

## Virtual Environments
It's often useful to create virtual environments for projects, so you don't install packages to the global environment.

### Creating a virtualenv
Example of creating a venv named `my-venv` with python version `3.11`
```bash
pyenv virtualenv 3.11 my-venv
```
To use this virtualenv in your project, run the following in the project directory
```bash
pyenv local my-venv
```
This creates a `.python-version` file. The `.bashrc` file I use initializes pyenv-virtualenv to automatically activate the virtualenv when you `cd` into the project directory.

To see what venvs are currently created in the system, run
```bash
pyenv virtualenvs
```

To delete a virtualenv, run
```bash
pyenv uninstall my-venv
```

