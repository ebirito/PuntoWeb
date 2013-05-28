function loadReceipt(){
	
	if (localStorage.success=="Y") {
		$('.success').show();
		$('.failed').hide();
	} else if (localStorage.success=="N") {
		$('.success').hide();
		$('.failed').show();
	}
		
}
	
	