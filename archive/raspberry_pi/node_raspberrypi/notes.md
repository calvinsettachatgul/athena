Re: Installing newer version of NodeJS on Pi 3
Quote
Fri Mar 18, 2016 9:28 pm

Code: Select all

git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm && git checkout v5.9.0
Then whenever you want to use node run
Code: Select all

source ~/.nvm/nvm.sh
or add that line to your `.bashrc` or `.profile`

resource https://www.raspberrypi.org/forums/viewtopic.php?t=140747
