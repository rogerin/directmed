$(function(){
	function validaSenha (input){ 
		if (input.value != document.getElementById('password').value) {
			input.setCustomValidity('Repita a senha corretamente');
		} else {
			input.setCustomValidity('');
		}
	} 	
});