// Statement.js

// Get statement with the last X transactions from the Stackmob 'payments' schema and display in on Jquery Mobile listview
function getPayments() {

	/*
		The number of transactions displayed in the statement (numberOfRecords) must be eventually dinamically assigned from
		a configuration interface.
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

			var ps = "";

			//On success generates a <li> for each register
			payments.each(function(item,key){

					 if (key > payments.size() - (numberOfRecords + 1)) {

						 var date = new Date(item.get('date'));

						 //ps = '<li>'+item.get('cardholderfirstname')+ ' ' +item.get('cardholdermiddleinitial')+ ' ' +item.get('cardholderlastname')+ ' ************' +item.get('cardlastfournumbers')+  ' ' + accounting.formatMoney(parseFloat(item.get('amount')))+ ' ' +$.datepicker.formatDate('dd-mm-yy', date)+'</li>' + ps;
					 
						ps = '<tr><td>'+item.get('cardholderfirstname')+ ' ' +item.get('cardholdermiddleinitial')+ ' ' +item.get('cardholderlastname')+ '</td><td>' +item.get('cardlastfournumbers')+  '</td><td>' + accounting.formatMoney(parseFloat(item.get('amount')))+ '</td><td>'+$.datepicker.formatDate('dd-mm-yy', date)+'</td></tr>' + ps;
					 }	 

               });

			
			console.debug(ps);
			var tb = $('#table-body');
			tb.empty().append(ps);
			$("#payments-table").trigger('create')
			/*
			$("#transactionMenu").append(ps);
			$("#transactionMenu").listview("refresh");
			*/
    	},
    	error: function(model, response) {
        	console.debug(response);
    	}
	});
}