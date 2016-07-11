# RateABoulder

## Getting started

    In a console go to this folder, all further actions expect you to work in this directory.

**1. Install NodeJS with nvm**

(how to install nvm?)
nvm put this in the ~/.bashrc:

<code>
export NVM_DIR="/Users/rob/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
</code>

So put this in ~/.profile to source the shell at new terminal:

<code>
source ~/.bashrc
</code>

then source the shell manually: . ~/.profile

npm install

**2. Run dev server**

grunt dev

Server listens to localhost:3000.
