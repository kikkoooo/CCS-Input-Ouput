var getData = function() {
	$.ajax({
		type: 'GET',
		url: 'scripts/omg.txt',
		data: 'text',
		success: function(data) {
			$('#message').prepend(data+' ');
			if (data == 'KIKKO') {
				$('body').css({
					'background-color': 'black',
					'color': 'white'
				});
				$('#imageBox').show();
			} else if (data == 'SHAQ') {
				$('body').css({
					'background-color': 'white',
					'color': 'black'
				});
				$('#imageBox').hide();
			}
		},
		/* Repeats every 200 millisecons */
		complete: function() {
			setTimeout(function() {
				getData();
			}, 500);
		}		
	});
}

$(document).ready(function(){     
	getData();
});


