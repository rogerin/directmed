module.exports = function(app){

var LoginController = {
	login: function(req,res){
		res.render('login/login');
	},
	logar: function(req,res){
		req.flash('info', 'logout com sucesso');
		res.redirect('/');
	},
	logout: function(req,res){
		req.logout();
		req.flash('info', 'logout com sucesso');
		res.redirect('/');
	}
}

	return LoginController;
}