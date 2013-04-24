function Login()
{
	var user = new StackMob.User({ username: $("#txtEmail").val(), password: $("#txtPassword").val() });
	//Makes a call to StackMob to request a login
	user.login(false, {
	  success: function(model) {
	    $.mobile.changePage('pages/payment.html');
	  }, 
	  error: function(model, response) {
	    var validator = $("#frmLogin").validate();
		validator.showErrors({"txtPassword": "E-mail o clave no validos (punto@punto.com, 12345)"});
	  }
	});
}

function lnkTermsClick()
{
	$.mobile.changePage('pages/terms.html');
}