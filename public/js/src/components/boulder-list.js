'use strict';

import React from 'react';
import {Boulder} from './boulder';

const BoulderList = React.createClass(
	{
		propTypes : {
			boulders: React.PropTypes.array.isRequired
		},
		render: function() {
			var boulderEntries = this.props.boulders.map(
				(boulder) => <Boulder name={boulder.name} description={boulder.description}/>
			);

			return (
				<div className="boulder-list">
					{boulderEntries}
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
