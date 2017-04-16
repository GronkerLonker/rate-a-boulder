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

## Helpful additions for development

### Sublime packages

- DockBlockr
- Babel




setup > clean > lint > build > test > bundle (assets, ui, server) > start

    "restart:server": "npm run build:server && npm run start",


    "clean:ui": "rm -rf $npm_package_config_distFilesAssets $npm_package_config_distFilesJspm",
    "// UI BUILD": "",
    "prebuild:ui": "npm run lint:ui",
    "// UI REBUILD ONLY UI SPECIFIC FILES": "",
    "prerebuild:ui": "npm run clean:ui",
    "rebuild:ui": "npm run build:ui",
    "// SERVER BUILD": "",
    "prebuild:server": "npm run lint:server",
    "// APP BUILD": "",
    "prebuild": "npm run clean",
    "build": "npm run build:server && npm run build:ui",
    "// TESTS": "",
    "pretest": "npm run setup && npm run build",
    "// ONE FOR ALL": "",
    "precomplete": "npm run test",
    "complete": "npm run start",
    "// WATCHING": "",
    "watch:ui": "watch 'npm run rebuild:ui && date +\"%T\" && echo === watching ==='  ./public/assets ./public/js/src --wait=1",
    "// NODE ENV HELPER": "",
    "env": "env"
