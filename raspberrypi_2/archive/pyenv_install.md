# pyenv

git clone https://github.com/pyenv/pyenv.git ~/.pyenv
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc

echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.bashrc

# got an error that zlib is not installed
# installing python 3.7.2 or 3.6.3

https://superuser.com/questions/281022/how-do-i-install-zlib-on-debian-6

apt-get install zlib1g, possibly zlib1g-dev as well.

