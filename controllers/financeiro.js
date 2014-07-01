module.exports = function(app){

	var Referenciado = app.models.referenciado;
	var Financeiro = app.models.financeiro;



var FinanceiroController = {
	index: function(req,res){
		Financeiro
			.find()
			.populate('referenciado') // only return the Persons name
			.exec(function (err, financeiro) {
			  if (err) {
			  	console.log(err);
			  	res.send(err);
			  } else {
				  res.render('financeiro/listar', { financeiro: financeiro });
			  }
			});
	}
}

	return FinanceiroController;
}