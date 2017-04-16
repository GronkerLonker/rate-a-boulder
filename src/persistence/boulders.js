'use strict';

import {getBouldersCollection,save} from './database.js';

const update = (name, boulder) => {
	if (!name || !boulder.name) {
		return false;
	}

	var existingBoulder = getBouldersCollection().find({name: name});
	if (existingBoulder && existingBoulder[0]) {
		existingBoulder[0].name = boulder.name;
		existingBoulder[0].description = boulder.description;

		getBouldersCollection().update(existingBoulder[0]);
	} else {
		return false;
	}
};

const insert = (boulder) => {
	if (!boulder || !boulder.name) {
		return false;
	}

	var existingBoulder = getBouldersCollection().find({name: boulder.name});
	if (existingBoulder && existingBoulder.length > 0) {
		return false;
	}
	getBouldersCollection().insert(boulder);
	save();
	return true;
};

const storeMockData = () => {
	var mockBoulder = {
		name: "Lucid Dreaming",
		description: "Cool new mock boulder."
	};
	if (!insert(mockBoulder)) {
		return false;
	}
	return true;
};

const getAll = () => { 
	return getBouldersCollection().data;
};

export {
	storeMockData,
	insert,
	update,
	getAll
};
