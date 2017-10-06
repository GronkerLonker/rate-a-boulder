'use strict';

import path from 'path';
import server from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import * as exercises from './persistence/exercises.js';
import bunyan from 'bunyan';

const log = bunyan.createLogger({name: 'ready-set-move-root', serializers: bunyan.stdSerializers})

const serverOptions = {
	root: __dirname
};

const app = server();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());

/* Routing */

app.get('/rest/exercises', function(req, res) {
	log.info('Get exercises.');
	res.set('Content-Type', 'application/json');
	let allExercises = exercises.getAll();
	log.debug('Got exercises:', allExercises);
	if (!allExercises) {
		res.status(404).end();
	}
	res.send(allExercises);
});

// add a new exercise
app.post('/rest/exercises', function(req, res) {
	if (exercises.insert(req.body)) {
		res.status(200).end();
	} else {
		res.status(409).end();
	}
});

// update an existing exercise
app.put('/rest/exercises/:name', function(req, res) {
	log.info('Updating exercise: %s', req.params.name);
	if (exercises.update(req.params.name, req.body)) {
		res.status(200).end();
	} else {
		res.status(404).end();
	}
});

app.post('/rest/exercises/mock', function(req, res) {
	if (exercises.storeMockData()) {
		res.status(200).end();
	} else {
		res.status(409).end();
	}
});

app.put('/rest/exercises/mock', function(req, res) {
	if (exercises.storeMockData()) {
		res.status(200).end();
	} else {
		res.status(404).end();
	}
});

/* Client JavaScript and JSPM module resources */

app.get('/bundle.js', function(req, res) {
	res.sendFile(req.url, serverOptions);
});

app.get('/bundle.js.map', function(req, res) {
	res.sendFile(req.url, serverOptions);
});

app.get('/jspm_packages/*', function(req, res) {
	res.sendFile(req.url, serverOptions);
});

app.get('/config.js', function(req, res) {
	res.sendFile(req.url, serverOptions);
});

/* static ui resources without code */

app.get('*', function(req, res) {
	req.url = req.url.replace(/\?.*/, '');
	var fileName = req.url || 'index.html';
	log.info({requestedFile: fileName});
	res.sendFile(path.join('assets', fileName), serverOptions);
});

/* Error handling */

const logErrors = (err, req, res, next) => {
	log.error({err: err, requestUrl: req.url});
	next(err);
};

const clientErrorHandler = (err, req, res, next) => {
	if (req.xhr) {
		res.status(500).send({error: 'Request failed!'});
	} else {
		next(err);
	}
};

const errorHandler = (err, req, res, next) => {
	if (res.headersSent) {
		return next(err);
	}
	res.status(500).send({error: err});
};

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(3000);
log.info('Server started. Listening to port 3000');