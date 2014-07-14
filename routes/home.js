module.exports = function(app){
	var home = app.controllers.home,
		autenticar = require('./../middleware/autenticador');
	

	app.get('/', autenticar.loginSistema,home.index);
	app.get('/solicitar-directmed', autenticar.loginSistema, home.formContato);
	app.get('/confirmar-solicitacao', autenticar.loginSistema, home.confirmarSolicitacao);
	app.get('/solicitar-referenciado', autenticar.loginSistema, home.solicitarReferenciado);
	app.get('/confirmar-referenciado', autenticar.loginSistema, home.confirmarReferenciado);
	




}