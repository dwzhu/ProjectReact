var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./db') // loads our connection to the mongo database
var passport = require('./passport')
var routes = require("./routes/routes");

var app = express();


// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));

app.use(express.static('./public'));

app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser


// Routes
routes(app)

//if (process.env.MONGODB_URI) {
  //mongoose.connect(process.env.MONGODB_URI);
//} else {
  //mongoose.connect('mongodb://localhost/ProjectReact');
//}


//var db = mongoose.connection;

//db.on('error', function(err) {
  //console.log('Mongoose Error: ', err);
//});

//db.once('open', function() {
  //console.log('Mongoose connection successful.');
//});

/* Express app ROUTING */
app.use('/auth', require('./auth'))

// ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})

// Launch App
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});
