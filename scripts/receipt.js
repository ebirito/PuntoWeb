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
	