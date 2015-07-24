var mongoose = require('mongoose');

var GameHistorySchema = mongoose.Schema({
	token: String,
	whiteName: String,
	blackName: String,
	pgn: String,
	result: String,
	timestamp: { type: Date, default: Date.now }
});

GameHistorySchema.methods = {
};

mongoose.model('GameHistory', GameHistorySchema);