'use strict';

var lokijs = require('lokijs');
var db = new lokijs('./data/rate-a-boulder.json');
var bouldersCollection;

db.loadDatabase({}, function () {
  // prepare collections and make them available
  bouldersCollection = db.getCollection('boulders');
  if (!bouldersCollection) {
      bouldersCollection = db.addCollection('boulders');
  }
});

var getBouldersCollection = function() {
  return bouldersCollection;
};

var save = function() {
	return db.saveDatabase();
};

module.exports = {
	// hand out collections
	getBouldersCollection: getBouldersCollection,
	// …
	// hand out db save etc. to abstract from implementation
	save: save
};