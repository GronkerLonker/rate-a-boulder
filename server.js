'use strict';

var server = require('express');
var bodyParser = require('body-parser');

var serverOptions = {
    root: __dirname + '/'
};

var app = server();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('*', function (req, res) {
    req.url = req.url.replace(/\?.*/, '');
    var fileName = req.url || 'index.html';
    console.log(fileName);
    res.sendFile('./ui/' + fileName, serverOptions, function (err) {
        res.status(404).end();
    });
});

app.listen(3000);
console.log('Server started. Listening to port 3000');