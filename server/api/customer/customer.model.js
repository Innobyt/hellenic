'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * customer Schema
 */
var customer = new Schema({
	created			: String,
	user			: String,
	number			: String,
	name			: String,
	address			: String,
	hide			: String,
	approval		: String
});
module.exports = mongoose.model('customer ', customer );