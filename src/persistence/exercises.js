'use strict';

import {getExerciseCollection,save} from './database.js';
import bunyan from 'bunyan';

const log = bunyan.createLogger({name: 'ready-set-move-exercises', serializers: bunyan.stdSerializers})

const update = (name, exercise) => {
	if (!name || !exercise || !exercise.name) {
		let error = new TypeError('Could not update exercise: exercise with given name has to exist, exercise needs to be set and have a name.');
		log.error({err: error, invalidArguments: {existingExerciseName: name, updatedExercise: exercise}});
		throw error;
	}

	log.info('Looking for exercise %s to update', name);

	var existingExercise = getExerciseCollection().find({name: name});
	if (!existingExercise || !existingExercise[0]) {
		log.info('Exercise %s not found, could not update.', name);
		return false;
	}
	existingExercise[0].name = exercise.name;
	existingExercise[0].description = exercise.description;

	log.info('Exercise %s found, updating', name);
	getExerciseCollection().update(existingExercise[0]);
	log.info('Exercise %s successfully updated', name);
	return true;
};

const insert = (exercise) => {
	if (!exercise || !exercise.name) {
		let error = new TypeError('Could not insert exercise, exercise needs to be set and have a name.');
		log.error({err: error, invalidArguments: {exercise: exercise}});
		throw error;
	}

	var existingExercise = getExerciseCollection().find({name: exercise.name});
	if (existingExercise && existingExercise.length > 0) {
		log.info('Could not insert exercise, already existing: %s', exercise.name);
		return false;
	}
	log.info('Added exercise: %s', exercise.name);
	getExerciseCollection().insert(exercise);
	save();
	return true;
};

const storeMockData = () => {
	var mockExercise = {
		name: "Lucid Dreaming",
		description: "Cool new mock boulder."
	};
	if (!insert(mockExercise)) {
		return false;
	}
	return true;
};

const getAll = () => {
	log.info("Get all exercises")
	let exerciseCollection = getExerciseCollection();
	if (!exerciseCollection) {
		log.error("Exercises collection not found.");
		return false;
	}
	log.info("Got collection", exerciseCollection.name);
	return exerciseCollection.data;
};

export {
	storeMockData,
	insert,
	update,
	getAll
};
