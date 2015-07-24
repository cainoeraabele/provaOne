var mongoose = require('mongoose');
var util = require('../config/util.js');

var HistorySchema = mongoose.Schema({
	token: String,
	source: String,
	target: String,
	username: String,
	piece: String,
	turn: String,
	move_time: String,
	timestamp: { type: Date, default: Date.now }
});

HistorySchema.methods = {
};

mongoose.model('History', HistorySchema);