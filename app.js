var fs = require('fs');
var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var hbs = require('express-hbs');

var env = process.env.NODE_ENV || 'default';
var config = require('config');

var app = express();
app.all('/gamehistory', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// configure database
require('./config/database')(app, mongoose);

// bootstrap data models
fs.readdirSync(__dirname + '/models').forEach(function (file) {
    if (~file.indexOf('.js')) require(__dirname + '/models/' + file);
});

// configure express-hbs
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials',
  defaultLayout: __dirname + '/views/layout.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// configure express app
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('S3CRE7'));
app.use(flash());
app.use(session({ secret: 'S3CRE7-S3SSI0N', saveUninitialized: true, resave: true } ));
app.use(express.static(path.join(__dirname, 'public')));
require('./config/passport')(app, passport);
app.use(passport.initialize());
app.use(passport.session());

// configure routes
var routes = require('./routes/index');
var account = require('./routes/account');
var api = require('./routes/api');
var play = require('./routes/play');
var login = require('./routes/login');
var register = require('./routes/register');
var search = require('./routes/search');
var history = require('./routes/history');
var gamehistory = require('./routes/gamehistory');
var elasticsearchapi = require('./routes/elasticsearchapi');

app.use('/', routes);
app.use('/login', login);
app.use('/register', register);
app.use('/account', account);
app.use('/play', play);
app.use('/api', api);
app.use('/search', search);

// configure error handlers
require('./config/errorHandlers.js')(app);

// launch app server
var server = require('http').createServer(app).listen(3000);

require('./config/socket.js')(server);

module.exports = app;
