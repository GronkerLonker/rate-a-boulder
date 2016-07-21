'use strict';

import React from 'react';
import {BoulderList} from './boulder-list.js';

var BouldersView = React.createClass({displayName: 'BouldersView',
	render: function() {
		return (
			React.createElement('div', {className: "boulders-view"}, React.createElement(BoulderList)
			)
		);
	}
});

export {BouldersView};

// var boulderSearch = component('BoulderSearch', function(cursor) {
// 	return dom.div({}, matches(cursor.cursor('boulders')));
// });
