$(function(){
	$('#botaoEnvia').click(function(){


		$.ajax({
			  type: "POST",
			  url: $("#assinaturaForm").attr("action"),
			  data: $("#assinaturaForm").serialize(),
			   crossDomain: true,
			  beforeSend: function(){
			  	$("#pecaCartaoForm").hide();
			  	$("#load").show();
			  	console.log("Enviando...");
			  },
			  success: function(data){
			  	console.log("sucesso");
			  	console.log(data);
			  },
			  error: function(err){
			  	console.log("error");
			  	console.log(err);

			  }
			});
			return false;



		var id = $(this).attr("rel");
		console.log(id);

	});
	
});