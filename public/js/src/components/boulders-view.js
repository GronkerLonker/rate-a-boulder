'use strict';

import React from 'react';
import {BoulderList} from './boulder-list.js';

var BouldersView = React.createClass({displayName: 'BouldersView',
	render: function() {
		return (
			<div className="boulders-view">
				<BoulderList />
			</div>
		);
	}
});

export {BouldersView};

// var boulderSearch = component('BoulderSearch', function(cursor) {
// 	return dom.div({}, matches(cursor.cursor('boulders')));
// });
