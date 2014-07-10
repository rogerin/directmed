module.exports = function(app){
	var autenticar = require('./../middleware/autenticador'),
		financeiro = app.controllers.financeiro;

	app.get('/financeiro', autenticar.loginSistema,financeiro.index);
	app.post('/financeiro/resposta', financeiro.resposta);
	app.get('/financeiro/resposta', financeiro.resposta);

}