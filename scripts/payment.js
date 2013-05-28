function CreateAndSavePayment()
{
	//Validate amount
	if (_amount <= 0)
	{
		var validator = $("#frmPayment").validate();
		validator.showErrors({"txtPaymentAmount": "Favor ingrese monto valido"});
		return false;
	}
	
	// Create the payment record and save in backend
	var payment = CreatePayment();
	payment.create({
    success: function(model) {
        alert("Payment saved");
		//Generates a Receipt before going to the Signature page
		createReceipt();
    },
    error: function(model, response) {
        alert("Error saving payment");
    }});
	
	
	
}

function CreatePayment()
{
	// Get card info from the reader
	var cardInfo = GetCardInfo();
	var Payment = StackMob.Model.extend({ schemaName: 'Payment' });
	var newPayment = new Payment(
		{
			Date: new Date(),
			Amount: _amount,
			CardHolderFirstName: cardInfo.CardHolderFirstName,
			CardHolderMiddleInitial: cardInfo.CardHolderMiddleInitial,
			CardHolderLastName: cardInfo.CardHolderLastName,
			CardLastFourNumbers: cardInfo.CardLastFourNumbers
		}
	);
	
	return newPayment;
}

function GetCardInfo()
{
	var cardInfo = new Object();
	cardInfo.CardHolderFirstName = "Jose";
	cardInfo.CardHolderMiddleInitial = "M";
	cardInfo.CardHolderLastName = "Perez";
	cardInfo.CardLastFourNumbers = "4242";
	
	return cardInfo;
}

function createReceipt()
{
	//Gets card info into dictionary
	var cardInfo = GetCardInfo();

	//Assings the card info to global variables
	localStorage.amount=_amount;
	localStorage.CardHolderFirstName=cardInfo.CardHolderFirstName;
	localStorage.CardHolderMiddleInitial=cardInfo.CardHolderMiddleInitial;
	localStorage.CardHolderLastName=cardInfo.CardHolderLastName;
	localStorage.CardLastFourNumbers=cardInfo.CardLastFourNumbers;
}

