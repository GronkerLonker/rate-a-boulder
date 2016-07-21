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
		{title: 'Jade', description: 'Super cool'},
		{title: 'Lucid Dreaming', description: 'Yay get high'},
		{title: 'Action Directe', description: 'Ouch'}
];

export {allBoulders};
