import {getAll} from '../../src/persistence/exercises';

import {expect} from 'chai';
import sinon from 'sinon';

import * as databaseMock from '../../src/persistence/database.js';

describe('Boulders data provider', function () {

	before(function() {
		sinon.stub(databaseMock, 'getExerciseCollection').returns(
			{
				data:{exercise: 'I am a little exercise'},
				bla: 'I am not relevant'
			}
		);
	});

	after(function() {
		databaseMock.getExerciseCollection.restore();
	});

	it('should return all data from data source', function () {
		let result = getAll();
		expect(result).to.deep.equal({exercise: 'I am a little exercise'});
	});
});