module.exports = function(app){
	var resposta = app.controllers.resposta;

	app.get('/respostas/listar', resposta.index);
}