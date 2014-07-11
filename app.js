var express			= require('express'),
	app         	= express(),
	path 			= require('path'),
	favicon 		= require('static-favicon'),
	cookieParser 	= require('cookie-parser'),
	bodyParser 		= require('body-parser'),
	methodOverride = require('method-override'),
	expressSession 	= require('express-session'),
	load 			= require('express-load'),
	mongoose    	= require('mongoose'),
	passport 		= require('passport'),
	passportLocal 	= require('passport-local'),
	passportHttp  	= require('passport-http'),
	flash  			= require('express-flash');

//mongoose.connect('mongodb://localhost/directmed', function(err){
mongoose.connect('mongodb://rogerio:yolanda@mongo.onmodulus.net:27017/un3uhoQo', function(err){
    if( err ) {
        console.log("Error conectar mongo db: " + err);
    } else {
        console.log("Conexao realizada com sucesso: " + err);
    }
});

var db = mongoose.connect;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(favicon());
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride());
app.use(allowCrossDomain);
app.use(cookieParser('secret-string-yolanda-te-amo'));
app.use(expressSession({
							secret: process.env.SESSION_SECRET || 'secret-string-yolanda-te-amo-demais',
							saveUninitialized: false,
                 			resave: false
						}
					)
		);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

passport.use(new passportLocal.Strategy(verificaLogin));

passport.use(new passportHttp.BasicStrategy(verificaLogin));

function verificaLogin(username, password, done){
	var pass = require('./middleware/password');
	var User = app.models.user;
	User.findOne({ 'email': username }, function (err, result) {
		if(err) { console.log("ERROR: " + err); }
		else {
			if(result){
				if(result.email == username && pass.validate(result.password, password)) {
					done(null, result);
				} else {
					done(null, null);
				}
			} else {
				done(null, null);
			}
		}
	});
}

passport.serializeUser(function(user, done){
	done(null, user);
});

passport.deserializeUser(function(user, done){
	done(null, user);
});

app.use('/api', passport.authenticate('basic'), { session: false });

load('models').then('controllers').then('routes').into(app);

var port = Number(process.env.PORT || 3000);
//alterado
app.listen(port, function(){
  console.log('PortaAtiva: ' + port +' ');
});