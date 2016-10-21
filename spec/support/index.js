'use strict';

const oddcast = require('oddcast');

exports.createBus = function createBus() {
	const bus = oddcast.bus();

	bus.events.use({}, oddcast.inprocessTransport());
	bus.commands.use({}, oddcast.inprocessTransport());
	bus.requests.use({}, oddcast.inprocessTransport());

	return bus;
};

exports.handleError = function (done) {
	return function (err) {
		console.error('Error report from testing:');
		console.error(err.stack);
		return done.fail(err);
	};
};
