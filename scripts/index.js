function Login()
{
	_user = new StackMob.User({ username: $("#txtEmail").val(), password: $("#txtPassword").val() });
	//Makes a call to StackMob to request a login
	_user.login(false, {
	  success: function(user) {
	   // If password needs to be reset then take the user to that page
	   if(user.needPasswordChange){
	    	$.mobile.changePage('pages/changePassword.html');
	    }
	    // otherwise go straight to the payment page
	   else{
	   		$.mobile.changePage('pages/payment.html');
	   }
	  }, 
	  error: function(user, response) {
	    var validator = $("#frmLogin").validate();
		validator.showErrors({"txtPassword": "E-mail o clave no validos"});
	  }
	});
}

function lnkTermsClick()
{
	$.mobile.changePage('pages/terms.html');
}