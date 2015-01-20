'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * vendortable Schema
 */
var vendortable = new Schema({
    created 	: String,
    user 		: String,
    no 			: String,
    name 		: String,
    hide 		: String,
    approval 	: String
});

module.exports = mongoose.model('vendortable', vendortable);