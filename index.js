'use strict'

const { AppleHealthKit } = require('react-native').NativeModules;
const { Permissions } = require('./Constants/Permissions')
const { Units } = require('./Constants/Units')

const HealthKit = Object.assign({}, AppleHealthKit, {
	Constants: {
		Permissions: Permissions,
		Units: Units,
	}
});

module.exports = HealthKit;
