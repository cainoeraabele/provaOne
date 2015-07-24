var express = require('express');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client(); // default to localhost:9200
var mongoose = require('mongoose');
var router = express.Router();

/* display game. */
router.post('/history/:token', function(req, res) {

    client.create({
        index: 'chesshub',
        type: 'game',
        body: {
            white: req.body.whiteName,
            black: req.body.blackName,
            content: req.body.history,
            token: req.body.token,
            result: req.body.result
        }
    }, function() {
        client.close();
        res.send({result:"ok"});
    });
});

/* api status, for monitor */
router.get('/', function(req, res) {
    res.status(200).end();
});

module.exports = router;