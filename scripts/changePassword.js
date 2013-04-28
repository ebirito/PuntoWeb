function ChangePassword()
{
	// Change the password
	var newPassword = $("#txtNewPassword").val();
	_user.resetPassword(_user.attributes.password, newPassword);
	_user.attributes.password = newPassword;
	// Set the needPasswordChange property to false
	// if there is a field that is not there yet, StackMob will automatically create it for you
	var userChanges = new StackMob.User({ username: _user.attributes.username, needPasswordChange : false });
	userChanges.save({}, {
	    success: function(model) {
	        $.mobile.changePage('payment.html');
	    },
	    error: function(model, response) {
	        alert(response);
	    }
	});
}

function lnkTermsClick()
{
	$.mobile.changePage('pages/terms.html');
}