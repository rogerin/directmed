module.exports = function(app){
	var financeiro = app.controllers.financeiro;

	app.get('/financeiro', financeiro.index);
}