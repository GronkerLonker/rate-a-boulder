'use strict';

var server = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var serverOptions = {
    root: __dirname + '/'
};

var app = server();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());

app.get('*', function (req, res) {
    req.url = req.url.replace(/\?.*/, '');
    var fileName = req.url || 'index.html';
    console.log(fileName);
    res.sendFile('./ui/' + fileName, serverOptions);
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000);
console.log('Server started. Listening to port 3000');