module.exports = function(app){
	var resposta = app.controllers.resposta,
		autenticar = require('./../middleware/autenticador');

	app.get('/respostas/listar', autenticar.loginSistema, resposta.index);
}