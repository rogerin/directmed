module.exports = function(app){
	var ref = app.controllers.referenciados;

	app.get('/referenciados', ref.index);
	app.get('/referenciado/cadastrar', ref.cadastrar);
	app.post('/referenciado/add', ref.add);

}