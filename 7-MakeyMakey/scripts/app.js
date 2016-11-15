$(document).ready(function(){     

 	// $("body").keydown(function(e) {

 	// 	// LETTER W
		// if (e.which == "87") {
		// 	alert("HEEEY");
 	// 	// LETTER D
		// } else if (e.which == "68") { // LETTER D
		// 	alert("HOOOO");
		// } 
	 //     e.preventDefault();

 	// });



 	$("body").keydown(function(e) {

 		// LETTER W
		if (e.which == "87") {
			$("#output-1").fadeIn(1000);
 		// LETTER D
		} else if (e.which == "68") { // LETTER D
			$("#output-2").fadeIn(1000);
		} 
	     e.preventDefault();

 	});
	


});


