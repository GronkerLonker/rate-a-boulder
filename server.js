'use strict';

var server = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var boulders = require('./persistence/boulders.js');

var serverOptions = {
    root: __dirname + '/'
};

var app = server();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());

app.get('/boulders', function (req, res) {
    console.log("Get boulders.");
    res.set('Content-Type', 'application/json');
    res.send(boulders.getAll());
});

// add a new boulder
app.post('/boulders', function (req, res) {
    if (boulders.insert(req.body)) {
        res.status(200).end();
    } else {
        res.status(409).end();
    }
});

app.post('/boulders/mock', function (req, res) {
    if (boulders.storeMockData()) {
        res.status(200).end();
    } else {
        res.status(409).end();
    }
});

// update an existing boulder
app.put('/boulders/:name', function (req, res) {
    if (boulders.update(req.params.name, req.body)) {
        res.status(200).end();
    } else {
        res.status(404).end();
    }
});

app.put('/boulders/mock', function (req, res) {
    if (boulders.storeMockData()) {
        res.status(200).end();
    } else {
        res.status(404).end();
    }
});

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