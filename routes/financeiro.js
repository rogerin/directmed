module.exports = function(app){
	var financeiro = app.controllers.financeiro;

	app.get('/financeiro', financeiro.index);
	app.post('/financeiro/resposta', financeiro.resposta);
}