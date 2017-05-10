$(document).ready(function() {
	// Способы доставки и оплаты по-умолчанию
	$('.choice-of-delivery-method input').prop('checked', false);
	$('.choice-of-delivery-method input#delivery-method1').prop('checked', true);

	$('.choice-of-payment-method input').prop('checked', false);
	$('.choice-of-payment-method input#payment-method1').prop('checked', true);

	// Выбор способа доставки
	$('.choice-of-delivery-method input').click(function() {
		var inputId = $(this).attr('id');
		console.log(inputId);
		$('.for-delivery-method').slideUp();
		$('#for-' + inputId +'').slideDown();
	});

	// Есть или нет аккаунта
	$('#have-account').click(function() {
		$('#if-have-account').slideUp();
		$('#if-not-have-account').slideDown();
		return false;
	});

	$('#not-have-account').click(function() {
		$('#if-not-have-account').slideUp();
		$('#if-have-account').slideDown();
		return false;
	});

	// установка e-mail по-умолчанию
	$('#email-for-changes').val('segey.noviy@gmail.com').addClass('true');
	//Имзенить e-mail;
	$('#change-email').click(function() {
		$('#email-for-changes').removeClass('true').val('').focus();
		return false;
	});
});