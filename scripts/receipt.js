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
    html: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Recibo Compra PoS</title></head><body><div align="center"><p><h2 style="font-family:Arial, Helvetica, sans-serif;">MI NEGOCIO C.A.</h2><span style="font-size:x-small;color:#999;font-family:Arial, Helvetica, sans-serif;">1ra Trv Los Palos Grandes, Torre Punto. Caracas, Venezuela<br style="text-align:center"> (800) 123-4568</br></span></p><span style="font-family:Arial, Helvetica, sans-serif;font-size:small;color:#333">Recibo: 00000</span><br/><span class="timeStamp" style="font-size: small;color:#333;font-family:Arial, Helvetica, sans-serif;" data-mce-style="font-size: small;">' + $.datepicker.formatDate('dd-mm-yy', newdate) + ' ' + formatCurrentTime() + '</span><h3><span style="font-family:Arial, Helvetica, sans-serif;font-size:large;" class="total">' + (accounting.formatMoney(total))+ '</span><span class="tenderedTotal"></span><br></h3><span class="acct" style="font-size: small;color:#333;font-family:Arial, Helvetica, sans-serif;" data-mce-style="font-size: small;">VISA ************</span></div></body></html>', 
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

function formatCurrentTime() {
	
	var newdate = new Date();
	var h = "";
	var m = "";
	var s = "";
	
	if (newdate.getHours() < 10) {

		h = "0" + newdate.getHours();
		
	} else {
	
		h = newdate.getHours();	
	}
	
	if (newdate.getMinutes() < 10) {

		m = "0" + newdate.getHours();
		
	} else {
	
		m = newdate.getMinutes();	
		
	}
	
	if (newdate.getSeconds() < 10) {

		s = "0" + newdate.getSeconds();
		
	} else {
	
		s = newdate.getSeconds();	
	}
	
	return h + ':' + m + ':' + s;
	
}