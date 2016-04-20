$(document).ready(function() {
	$('#gifLink1').click(function(){
		$(this).next().toggle();
		if($(this).next().is(':visible')) {
			$(this).text('Hide GIF');
		}
		else {
			$(this).text('Show funny GIF');
		}
	});
	$('.navitem').hover(function() {
		$(this).css('background-color',	        'lightgrey');
		$(this).css('border', '1px solid black');
		},
		function() {
		$(this).css('background-color',	        'white');
		$(this).css('border', 'none');
	});
	$('.dropdown-content a').hover(function() {
		$(this).css('background-color',	        'lightgrey');
		$(this).css('border', '1px solid black');
		},
		function() {
		$(this).css('background-color',	        'white');
		$(this).css('border', 'none');
	});
});
