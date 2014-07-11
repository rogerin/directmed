module.exports = function(app){
	var login = app.controllers.login,
		passport 	= require('passport');
	

	app.get('/login', login.login);
	app.get('/logout', login.logout);
	app.get('/erro-login', login.errorLogin);


	app.post('/login', passport.authenticate('local',{
		successRedirect: '/',
		failureRedirect: '/erro-login'
	}));

}