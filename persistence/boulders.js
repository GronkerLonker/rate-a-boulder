'use strict';

var db = require('./database.js');

var update = function(name, boulder) {
    if (!name || !boulder.name) {
    	return false;
    }

    var existingBoulder = db.getBouldersCollection().find({name: name});
    if (existingBoulder && existingBoulder[0]) {
        existingBoulder[0].name = boulder.name;
        existingBoulder[0].description = boulder.description;

        db.getBouldersCollection().update(existingBoulder[0]);
    } else {
    	return false;
    }
}

var insert = function(boulder) {
    if (!boulder || !boulder.name) {
    	return false;    
    }

	var existingBoulder = db.getBouldersCollection().find({name: boulder.name});
    if (existingBoulder && existingBoulder.length > 0) {
    	return false;
    }
    db.getBouldersCollection().insert(boulder);
    db.save();
    return true;
};

var storeMockData = function() {
	var mockBoulder = {
		name: "Lucid Dreaming",
		description: "Cool new mock boulder."
	};
	if (!insert(mockBoulder)) {
		return false;
	}
	return true;
};

var getAll = function() {
    return db.getBouldersCollection().data;
};

module.exports = {
	storeMockData: storeMockData,
	insert: insert,
	update: update,
	getAll: getAll
};