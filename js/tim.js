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
	$('#backgroundVideo').dblclick(function(){
		$(this).fadeOut();
		$('.videoPage').fadeIn()
		$("#mute").fadeOut();
		$("#videoExit").fadeOut();
		$(this).prop('muted', true);
	});
	$('#videoButton').click(function(){
		$('#backgroundVideo').fadeIn();
		$('.videoPage').fadeOut();
		$('#videoExit').fadeIn();
		$('#mute').fadeIn();
	});
	$("#backgroundVideo").click( function (){
        if( $(this).prop('muted')==true )
        {
			$("#mute").fadeOut();
            $(this).prop('muted', false);
        }
		else {
			$("#mute").fadeIn();
			$(this).prop('muted', true);
		}
    });

});
