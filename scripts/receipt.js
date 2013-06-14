//receipt.js

// Show or hide div tags depending on the outcome (successful or failed) of the transacion
function loadReceipt(){
	
	if (localStorage.success=="Y") {
		$('.success').show();
		$('.failed').hide();
	} else if (localStorage.success=="N") {
		$('.success').hide();
		$('.failed').show();
	}
		
}

//Cancel the receipt without sending a copy to the costumer email
function cancel() {
	$.mobile.changePage('payment.html');
}

//Send an email to the address specified in the textfield
function send() {

	var newdate = new Date();
	var tax = parseFloat(localStorage.amount) * 0;
	var total = tax + parseFloat(localStorage.amount);
	
	StackMob.customcode('sendgrid/email', { 
    subject: 'Recibo #0000', 
    from: 'non-respond@puntolatam.com', 
    html: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Untitled Document</title></head><body><p>	<h2 >MOE\'S</h2>	<span style="font-size: xx-small;color:#908d90;";>		1ra Trv Los Palos Grandes, Torre Punto, Caracas, Venezuela<br> (800) 123-4568	</span></p><span>Recibo:00000</span><span class="timeStamp" style="font-size: small;color:#b4b4b8;" data-mce-style="font-size: small;">' + $.datepicker.formatDate('dd-mm-yy', newdate) + '</span><h3>	<span class="total">' + (accounting.formatMoney(total)) + '</span>	<span class="tenderedTotal"></span>	<br></h3><span class="acct" style="font-size: small;color:#b4b4b8;" data-mce-style="font-size: small;">VISA ************</span></body></html>', 
    usernames: ['Usuario Punto'], 
    emails: [$('#UserEmail').val()] 
    }, 
    'POST', 
    { 
    success: function(result) { 
        console.debug(result); 
    }, 
    error: function(error) { 
        console.log(error); 
    }
});
	
}