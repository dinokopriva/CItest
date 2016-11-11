import test from 'ava';

const rootRoute = require('../../app/routes');

// const sinon = require('sinon');

test('root is defined', (t) => {
	t.truthy(rootRoute);
});
