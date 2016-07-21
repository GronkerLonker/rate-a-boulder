'use strict';

import immstruct from 'immstruct';
import {allBoulders} from './api.js';

var boulders = immstruct({
	search: '',
	boulders: [{title: 'NOINIT', description: 'Initialization didn\'t happen yet'}]
});

const refreshBoulders = function() {
	boulders.cursor('boulders').update(allBoulders);
};

refreshBoulders();

export {boulders};
