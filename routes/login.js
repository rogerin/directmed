module.exports = function(app){
	var login = app.controllers.login;

	app.get('/login', login.login);
	app.post('/logar', login.logar);

}