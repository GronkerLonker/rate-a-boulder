'use strict';

/* Main entry point where everybody in the FE comes together for a relaxing evening at the cozy fireplace */
// document is only present in browser so needs to be ignored by eslint,
// this needs to be adapted for server side rendering later
const rootElement = document.body; // eslint-disable-line no-undef

import React from 'react';
import ReactDOM from 'react-dom';
// import component from 'omniscient';
// import * as state from './state.js';
// import {allBoulders} from './api.js';
import {BouldersView} from './components/boulders-view.js';

const render = function render() {
	ReactDOM.render(
		React.createElement(BouldersView, null),
		// boulderSearch(state.boulders.cursor()),
		rootElement
	);
};

render();

// state.boulders.on('swap', render);
