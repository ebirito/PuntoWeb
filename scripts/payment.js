function btnPayClick()
{
	$.mobile.changePage('signature.html');
}

function CheckHeadset()
{
	HeadsetWatcher.watch(function(result) {
	ToggleActions(result.plugged);
  });
}

function ToggleActions(readerPlugged)
{
	$("#txtPaymentAmount").prop('disabled', !readerPlugged);
	if (readerPlugged){
		$("#divPay").show();
		$("#divInsertReader").hide();
		$("#txtPaymentAmount").focus();
	}
	else{
		$("#divPay").hide();
		$("#divInsertReader").show();
	}
	
}
