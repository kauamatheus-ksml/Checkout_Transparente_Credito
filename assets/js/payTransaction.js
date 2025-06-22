//PayTransaction.js
function payTransactionCreditPS(cardData, cc_encrypted){
	console.log("Enviando dados para a finalização do pagamento...");
	$.ajax({
		url: "controllers/PayControllerCreditCard.php",
		type: "POST",
		data: {
			input_orderID:cardData.input_orderID,
			input_customer_name:cardData.input_customer_name,
			input_customer_cpf:cardData.input_customer_cpf,
			input_customer_email:cardData.input_customer_email,
			input_customerID:cardData.input_customerID,
			input_customer_ddd:cardData.input_customer_ddd,
			input_customer_phone:cardData.input_customer_phone,
			input_orderValue:cardData.input_orderValue,
			cc_encrypted:cc_encrypted,
			input_cc_cvv:cardData.input_cc_cvv,
			input_customer_address:cardData.input_customer_address,
			input_customer_address_number:cardData.input_customer_address_number,
			input_customer_complement:cardData.input_customer_complement,
			input_customer_district:cardData.input_customer_district,
			input_customer_city:cardData.input_customer_city,
			input_customer_cep:cardData.input_customer_cep
		}, 
		success: function(resultado){
			console.log('Pagamento retornou com sucesso!');
			if (resultado == 200 || resultado === "200") {
				alert("Pagamento enviado!");
			} else {
				console.log('Pagamento retornou com erro!');
                console.log(resultado);
                alert("Pagamento retornou com erro!");
			}
		},
		error: function(e){
			console.log(e);
            alert("Não foi possível realizar o pagamento! Tente novamente em alguns instantes.");
		}
	});
}
$(document).ready(function() {
	$('#payBTN').on('click', function (e) {
	  e.preventDefault();
  
	  const cardData = {
		input_orderID: $('#input_orderID').val(),
		input_customer_name: $('#input_customer_name').val(),
		input_customer_cpf: $('#input_customer_cpf').val(),
		input_customer_email: $('#input_customer_email').val(),
		input_customerID: $('#input_customerID').val(),
		input_customer_ddd: $('#input_customer_ddd').val(),
		input_customer_phone: $('#input_customer_phone').val(),
		input_orderValue: $('#input_orderValue').val(),
		input_cc_cvv: $('#input_cc_cvv').val(),
		input_customer_address: $('#input_customer_address').val(),
		input_customer_address_number: $('#input_customer_address_number').val(),
		input_customer_complement: $('#input_customer_complement').val(),
		input_customer_district: $('#input_customer_district').val(),
		input_customer_city: $('#input_customer_city').val(),
		input_customer_cep: $('#input_customer_cep').val(),
	  };
  
	  // Aqui você deveria chamar a função que gera cc_encrypted usando o SDK do PagSeguro
	  // Exemplo fictício (você precisa adaptar ao seu encryptCard.js):
	  const cardNumber = $('#input_cc_number').val();
	  const expMonth = $('#input_cc_month').val();
	  const expYear = $('#input_cc_year').val();
	  const cvv = $('#input_cc_cvv').val();
  
	  const pubKey = $('#input_pubKey').val();
  
	  // Supondo que encryptCard seja uma função do encryptCard.js
	  encryptCard(cardNumber, expMonth, expYear, cvv, pubKey).then(cc_encrypted => {
		payTransactionCreditPS(cardData, cc_encrypted);
	  }).catch(err => {
		console.log("Erro na criptografia:", err);
		alert("Erro ao gerar token do cartão. Verifique os dados e tente novamente.");
	  });
	});
  });
  