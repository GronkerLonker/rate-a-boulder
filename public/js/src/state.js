'use strict';

import immstruct from 'immstruct';

export const boulders = immstruct({
	search: '',
	boulders: [
		{title: 'Jade', description: 'Super cool'},
		{title: 'Lucid Dreaming', description: 'Yay get high'},
		{title: 'Action Directe', description: 'Ouch'}
	]
});
