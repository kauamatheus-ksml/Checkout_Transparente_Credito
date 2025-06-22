<?php
$appName = "Checkout Transparente - Cartão de Crédito";

// Defina 1 para 'sandbox' e 2 para 'produção'
$pagSeguroMode = 1;

if($pagSeguroMode == 1){
	$ps_Token = "4ab91d8e-3ad7-44f4-b57f-ba304a3acc28f5e3fb1f46d98198ac8f527977b4c6c21f7f-1cf3-4c79-8512-a1b6b8892aa2";
	$ps_pubKeyURL = "https://sandbox.api.pagseguro.com/public-keys/";
	$ps_ordersURL = "https://sandbox.api.pagseguro.com/orders";
	$ps_clientEmail = "kauamatheus92000@gmail.com";
	$ps_billIdentification = "SyncHolding";
	$ps_notificationsURL = "https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/notifications/";
} else if($pagSeguroMode == 2){
	$ps_Token = "SEU_TOKEN";
	$ps_pubKeyURL = "https://api.pagseguro.com/public-keys/";
	$ps_ordersURL = "https://api.pagseguro.com/orders";
	$ps_clientEmail = "seu_email_pagseguro@mail.com";
	$ps_billIdentification = "MINHALOJA";
	$ps_notificationsURL = "https://ws.pagseguro.uol.com.br/v2/transactions/notifications/";
}
?>