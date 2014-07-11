module.exports = function(app){
	var home = app.controllers.home,
		autenticar = require('./../middleware/autenticador');
	

	app.get('/', autenticar.loginSistema,home.index);
	app.get('/solicitar-directmed', autenticar.loginSistema,home.formContato);

}