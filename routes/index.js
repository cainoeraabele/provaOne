var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var util = require('../config/util.js');
var User = mongoose.model('User');

var router = express.Router();

router.get('/', function(req, res) {
   mongoose.model('Quote').find({}, function(err, quotes) {
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        mongoose.model('Puzzle').find({}, function(err, puzzles) {
           var randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
           var logoutSuccessMessage = req.flash('logoutSuccess');
           var welcomeMessage = req.flash('welcomeMessage');
           var registerSuccessMessage = req.flash('registerSuccessMessage');
           res.render('partials/index', {
               title: 'First Move',
               quote: randomQuote,
               puzzle: randomPuzzle,
               logoutSuccessMessage: logoutSuccessMessage,
               welcomeMessage: welcomeMessage,
               registerSuccessMessage: registerSuccessMessage,
               user: req.user,
               isHomePage: true
           });
       });
    });
});

router.get('/game/:token/:side', function(req, res) {
    var token = req.params.token;
    var side = req.params.side;
    res.render('partials/game', {
        title: 'First Move - Game ' + token,
        user: req.user,
        isPlayPage: true,
        token: token,
        side: side
    });
});

router.get('/logout', function(req, res) {
    req.logout();
    req.flash('logoutSuccess', 'You have been successfully logged out');
    res.redirect('/');
});

router.get('/tv', function(req, res) {
    res.render('partials/tv', {
        title: 'First Move - Tv',
        user: req.user,
        isTvPage: true,
        opponent1: 'V. Anand',
        opponent2: 'G. Kasparov'
    });
});

router.get('/monitor', function(req, res) {

    /*todo : ping services (mongo, elasticsearch and api) and populate status
    http.get("http://localhost:3000/api", function(res) {
        var apiStatus = res.statusCode === 200;
        var mongoStatus = mongoose.connection.modelNames().length === 0;
        // render monitor page
    })*/
    var mongoStatus = "success", mongoIcon = "smile";
    var apiStatus = "success", apiIcon = "smile";
    var esStatus = "success", esIcon = "smile";
    res.render('partials/monitor', {
        title: 'First Move - Monitor',
        user: req.user,
        status: {
            mongo: mongoStatus,
            api: apiStatus,
            es: esStatus
        },
        icon: {
            mongo: mongoIcon,
            api: apiIcon,
            es: esIcon
        }
    });
});
router.get('/about', function(req, res){
res.render('partials/about', {
      title: 'First Move - About',
      user: req.user,
      isAboutPage: true,
      opponent1: 'V. Anand',
      opponent2: 'G. Kasparov'
  });
})
router.get('/why-first-move', function(req, res){
res.render('partials/why-first-move', {
      title: 'First Move - Why first move',
      user: req.user,
      isWhyfirstmovePage: true,
      opponent1: 'V. Anand',
      opponent2: 'G. Kasparov'
  });
})
router.get('/kids-zone', function(req, res){
    mongoose.model('Puzzle').find({}, function(err, puzzles) {
       var randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
       res.render('partials/kids-zone', {
           title: 'First Move : Kids Zone',
           puzzle: randomPuzzle,
           user: req.user,
           isKidsZonePage: true,
       });
   });
})

router.get('/chess-news', function(req, res){
res.render('partials/chess-news', {
      title: 'First Move - Chess news',
      user: req.user,
      isChessNewsPage: true,
      opponent1: 'V. Anand',
      opponent2: 'G. Kasparov'
  });
})
router.get('/donate', function(req, res){
res.render('partials/donate', {
      title: 'First Move - Donate',
      user: req.user,
      isDonatePage: true,
      opponent1: 'V. Anand',
      opponent2: 'G. Kasparov'
  });
})
router.get('/boards', function(req, res){
res.render('partials/boards', {
      title: 'First Move - Donate',
      user: req.user,
      isBoardsPage: true,
      opponent1: 'V. Anand',
      opponent2: 'G. Kasparov'
  });
})
router.get('/board-game', function(req, res){
res.render('partials/board-game', {
      title: 'First Move - Donate',
      user: req.user,
      isBoardGamePage: true,
      opponent1: 'V. Anand',
      opponent2: 'G. Kasparov'
  });
})
router.get('/checkmate-challenge', function(req, res){
res.render('partials/checkmate-challenge', {
      title: 'First Move - Checkmate challenge',
      user: req.user,
      isCheckMateChallengePage: true,
      opponent1: 'V. Anand',
      opponent2: 'G. Kasparov'
  });
})
router.get('/play-level', function(req, res){
res.render('partials/play-level', {
      title: 'First Move - Level',
      user: req.user,
      isPlayChessPage: true,
      opponent1: 'V. Anand',
      opponent2: 'G. Kasparov'
  });
})
router.get('/play-checkmate-challenge/:fen_index/:room_number', function(req, res){
var room_number = req.params.room_number;
var fen_index = req.params.fen_index;
res.render('partials/play-chess', {
      title: 'First Move - Checkmate Challenge',
      user: req.user,
      room_number: room_number,
      fen_index: fen_index,
      isCheckMateChallengingPage: true,
      withComputer: true,
      withCheckmate: true
  });
});

router.get('/player-vs-computer', function(req, res) {
    res.render('partials/play-chess', {
        title: 'First Move - Game',
        room_number: 'Player VS Compute xr',
        user: req.user,
        isPlayPage: true,
        withComputer: true
    });
});

router.get('/player-vs-player', function(req, res) {
    res.render('partials/play-chess', {
        title: 'First Move - Game',
        room_number: 'Player VS Player',
        user: req.user,
        isPlayPage: true,
        withComputer: false
    });
});

router.get('/play-pawn', function(req, res) {
    res.render('partials/play-pawn', {
        title: 'First Move - Pawn Game',
        room_number: 'Pawn Game',
        user: req.user,
        isPlayPage: true,
        withComputer: false
    });
});

module.exports = router;
