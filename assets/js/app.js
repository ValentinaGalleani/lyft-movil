$(document).ready(function(){
	setInterval(function(){
			$('.pantalla-inicio').fadeOut();
	}, 4000);
});

$(document).ready(function() {
	$(".sign-1").hide();
	$('#btn-2').click(function() {
	$('.sign-1').show();
	$('.fondo').hide();
	});
});