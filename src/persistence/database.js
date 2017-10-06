'use strict';

import bunyan from 'bunyan';
import Lokijs from 'lokijs';

const log = bunyan.createLogger({name: 'ready-set-move-database', serializers: bunyan.stdSerializers})
const db = new Lokijs('./data/rate-a-boulder.json');
let exerciseCollection;

db.loadDatabase({}, function() {
	log.info("load database")
	// prepare collections and make them available
	exerciseCollection = db.getCollection('exercises');
	if (!exerciseCollection) {
		log.info("exercise collection not existent, creating it")
		exerciseCollection = db.addCollection('exercises');
	}
});

const getExerciseCollection = () => {
	log.info("Get exercise collection")
	return exerciseCollection;
};

const save = () => {
	return db.saveDatabase();
};

export {
	// hand out collections
	getExerciseCollection,
	// …
	// hand out db save etc. to abstract from implementation
	save
};
