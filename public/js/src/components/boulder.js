'use strict';

import React from 'react';

const Boulder = React.createClass(
	{
		propTypes : {
			name: React.PropTypes.string.isRequired,
			description: React.PropTypes.string.isRequired
		},
		render: function() {
			return (
				<div className="boulder">
					<h2 className="boulder-name">
						{this.props.name}
					</h2>
					{this.props.description}
				</div>
			);
		}
	}
);

export {Boulder};

