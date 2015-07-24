var express = require('express');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client(); // default to localhost:9200

var mongoose = require('mongoose');
var History = mongoose.model('History');

var router = express.Router();

router.post('/', function(req, res) {
	try {
		var history = new History({
            token: req.body.token,
            source: req.body.source,
            target: req.body.target,
            piece: req.body.piece,
            turn: req.body.orientation,
            move_time: req.body.move_time,
            username: req.body.username
        });
		history.save(function(err) {
			if (err) {
				res.set('Content-Type', 'application/json');
				res.status(200);
				res.send({
					result : err
				});
				console.log('error:' + err);
			} else {
				res.set('Content-Type', 'application/json');
				res.status(200);
				res.send({
					result : 'ok'
				});
			}
		});
	} catch (e) {
		// TODO: handle exception
	}
});

module.exports = router;
