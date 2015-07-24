var express = require('express');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client(); // default to localhost:9200

var mongoose = require('mongoose');
var GameHistory = mongoose.model('GameHistory');

var router = express.Router();

router.post('/', function(req, res) {
	try {
		var history = new GameHistory({
            token: req.body.token,
            whiteName: req.body.whiteName,
            blackName: req.body.blackName,
            pgn: req.body.history,
            result: req.body.result
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
				try {
					console.log(req.body.movenscores);
					console.log(req.body.history);
				    client.create({
				        index: 'chesshub',
				        type: 'game',
				        body: {
				            white: req.body.whiteName,
				            black: req.body.blackName,
				            whiteid: req.body.whiteid,
				            blackid: req.body.blackid,
				            gameid: req.body.gameid,
				            content: req.body.history,
				            token: req.body.token,
				            result: req.body.result,
				            movenscore: req.body.movenscores,
				            beginTime: req.body.beginTime,
				            endTime: req.body.endTime
				        }
				    }, function(err, response) {
//				        client.close();
				    	if (err) {
							res.set('Content-Type', 'application/json');
							res.status(200);
							res.send({
								result : err
							});
							console.log('error:' + err);
						}else{
							
							res.set('Content-Type', 'application/json');
							res.status(200);
							res.send({
								result : 'ok'
							});
						}
				    });
				} catch (e) {
					res.set('Content-Type', 'application/json');
					res.status(200);
					res.send({
						result : e
					});
					return;
				}

			}
		});
	} catch (e) {
	}
});

module.exports = router;
