'use strict';

const Lokijs = require('lokijs');
const db = new Lokijs('./data/rate-a-boulder.json');
let bouldersCollection;

db.loadDatabase({}, function() {
  // prepare collections and make them available
	bouldersCollection = db.getCollection('boulders');
	if (!bouldersCollection) {
		bouldersCollection = db.addCollection('boulders');
	}
});

const getBouldersCollection = () => {
	return bouldersCollection;
};

const save = () => {
	return db.saveDatabase();
};

export {
	// hand out collections
	getBouldersCollection,
	// …
	// hand out db save etc. to abstract from implementation
	save
};
