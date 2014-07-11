module.exports = function(app){
	var HomeController = {
		index: function(req,res){
			res.render('index', {
				menu: 'resumo',
				user: req.user
			});
		},
		formContato: function(req, res){
			res.render('contato/form-contato', {
				menu: 'config',
				user: req.user
			});
		}

	}

	return HomeController;
}