'use strict';
/**
 * API to server.
 * @module api
 */

/**
 * Fetch all boulders from backend.
 * @function
 * @return {Array} an array with all existing boulders.
 */
const allBoulders = () => [
		{name: 'Jade', description: 'Super cool'},
		{name: 'Lucid Dreaming', description: 'Yay get high'},
		{name: 'Action Directe', description: 'Ouch'}
];

export {allBoulders};
