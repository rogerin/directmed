module.exports = function(app){

var LoginController = {
	login: function(req,res){
		res.render('login/login');
	},
	logar: function(req,res){
		req.flash('info', 'Usuário logado com sucesso! Bem vindo a Acesso Exclusivo!');
		res.redirect('/');
	},
	logout: function(req,res){
		req.logout();
		req.flash('info', 'Logout com sucesso!');
		res.redirect('/');
	},
	errorLogin: function(req,res){
		req.logout();
		req.flash('info', 'Erro ao fazer login!');
		res.redirect('/');
	}
}
	return LoginController;
}