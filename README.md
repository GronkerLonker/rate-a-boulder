# RateABoulder

## Getting started

    In a console go to this folder, all further actions expect you to work in this directory.

### install nvm 

https://github.com/creationix/nvm#install-script

nvm puts this in the ~/.bashrc:

<code>
export NVM_DIR="/Users/rob/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
</code>

So put this in ~/.profile to source the shell at new terminal:

<code>
source ~/.bashrc
</code>

then source the shell manually: . ~/.profile

### install node (version 6)

nvm install 6

### Build

npm build

### Testing

npm test

### Runing the server

npm start

to run a complete build and start the server: npm run complete

Server listens to localhost:3000.
