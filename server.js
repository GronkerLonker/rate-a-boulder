'use strict';

const path = require('path');
var server = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var boulders = require(path.join(__dirname, 'src', 'persistence', 'boulders.js'));

var serverOptions = {
	root: __dirname
};

var app = server();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());

/* Routing */

app.get('/boulders', function(req, res) {
	console.log("Get boulders.");
	res.set('Content-Type', 'application/json');
	res.send(boulders.getAll());
});

// add a new boulder
app.post('/boulders', function(req, res) {
	if (boulders.insert(req.body)) {
		res.status(200).end();
	} else {
		res.status(409).end();
	}
});

app.post('/boulders/mock', function(req, res) {
	if (boulders.storeMockData()) {
		res.status(200).end();
	} else {
		res.status(409).end();
	}
});

// update an existing boulder
app.put('/boulders/:name', function(req, res) {
	if (boulders.update(req.params.name, req.body)) {
		res.status(200).end();
	} else {
		res.status(404).end();
	}
});

app.put('/boulders/mock', function(req, res) {
	if (boulders.storeMockData()) {
		res.status(200).end();
	} else {
		res.status(404).end();
	}
});

/* JSPM module resources */

app.get('/jspm_packages/*', function(req, res) {
	res.sendFile(req.url, serverOptions);
});

app.get('/config.js', function(req, res) {
	res.sendFile(req.url, serverOptions);
});

/* static ui resources */

app.get('*', function(req, res) {
	req.url = req.url.replace(/\?.*/, '');
	var fileName = req.url || 'index.html';
	console.log(fileName);
	res.sendFile(path.join('ui', fileName), serverOptions);
});

/* Error handling */

var logErrors = function(err, req, res, next) {
	console.error(err.stack, req.url);
	next(err);
};

var clientErrorHandler = function(err, req, res, next) {
	if (req.xhr) {
		res.status(500).send({error: 'Request failed!'});
	} else {
		next(err);
	}
};

var errorHandler = function(err, req, res, next) {
	if (res.headersSent) {
		return next(err);
	}
	res.status(500);
	res.render('error', {error: err});
};

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(3000);
console.log('Server started. Listening to port 3000');
