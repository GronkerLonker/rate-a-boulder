import {getAll} from '../../src/persistence/boulders';

import {expect} from 'chai';
import sinon from 'sinon';

import * as databaseMock from '../../src/persistence/database.js';

describe('Boulders data provider', function () {

	before(function() {
		sinon.stub(databaseMock, 'getBouldersCollection').returns(
			{
				data:{boulder: 'I am a little boulder'},
				bla: 'I am not relevant'
			}
		);
	});

	after(function() {
		databaseMock.getBouldersCollection.restore();
	});

	it('should return all data from data source', function () {
		let result = getAll();
		console.error(result);
		expect(result).to.deep.equal({boulder: 'I am a little boulder'});
	});
});