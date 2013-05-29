// Statement.js

// Get statement with the last X transactions from the Stackmob 'payments' schema
function getPayments() {
		
	/*
		number of transactions displayed in the statement, this must be eventually dinamically assigned from
		a configuration interface
	*/ 
	var numberOfRecords = 10;
			
	var Payment = StackMob.Model.extend({
        schemaName:'payment'
    });

	var Payments = StackMob.Collection.extend({
        model:Payment
    });

	var payments = new Payments();
	var q = new StackMob.Collection.Query();
	//Queries the transaction of this logged user
	q.equals('sm_owner', 'user/'+_user.get('username'));
	 
	payments.query(q,{
    	success: function(model) {
			//On success generates a <p> for each register
			var ps = "";
			payments.each(function(item,key){
					 if (key > payments.size() - (numberOfRecords + 1)) {
						 
						 ps = '<p><span style="font-size: xx-small;" data-mce-style="font-size: xx-small;">'+item.get('cardholderfirstname')+ ' ' +item.get('cardholdermiddleinitial')+ ' ' +item.get('cardholderlastname')+ ' ************' +item.get('cardlastfournumbers')+ ' Bs.' +item.get('amount')+ ' ' +item.get('date')+'</span></p>' + ps;
					 }	 
					console.debug(item.get('amount'));
               });
			document.getElementById('payments').innerHTML = ps;
    	},
    	error: function(model, response) {
        	console.debug(response);
    	}
	});
}
