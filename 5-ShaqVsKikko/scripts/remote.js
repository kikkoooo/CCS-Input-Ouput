$(document).ready(function(){     

	var buttonValue;

	/* Buttons functions */
	$('#btnKikko').click(function(e){ 
		/* Change the value of buttonValue */
		buttonValue = 'KIKKO';
		/* Run Ajax script */		
		sendData();
		return false;
    });

	$('#btnShaq').click(function(e){ 
		buttonValue = 'SHAQ';
		sendData();
		return false;
    });

	/* Function to send buttonValue to the PHP file */
	function sendData() {
		$.ajax({
			type: 'POST',
			url: 'scripts/save.php',
			data: {
				'buttonValue': buttonValue
			},
			success: function() {
				window.console.log("success");
			}
		});
	}
});


