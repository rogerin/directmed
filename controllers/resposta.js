module.exports = function(app){

	var Resposta = app.models.resposta;

	var RespostaController = {
		index: function(req,res){
			Resposta.find(function(err, respostas){
				if(err) {
					console.log("Erro ao listar gavetas: " + err);
				} else {
					res.render('respostas/listar', {
														respostas:respostas,
														user: req.user	
													});
				}
			});
		}
	};
	return RespostaController;
}