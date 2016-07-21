'use strict';

import React from 'react';

const BoulderList = React.createClass(
	{
		render: function() {
			return (
				<div className="boulder-list">
					THE list!
				</div>
			);
		}
	}
);

export {BoulderList};

// var dom = React.DOM;

// var match = component('Match', function(cursor) {
// 	return dom.li({}, dom.a({href: cursor.get('description')}, cursor.get('title')));
// });

// var matches = component('Matches', function(boulders) { // eslint-disable-line no-unused-vars
// 	return dom.ul(
// 		{},
// 		boulders.toArray().map(function(boulder, i) {
// 			// Add key through first argument
// 			return match('match-' + boulder.get('title'), boulder);
// 		})
// 	);
// });
