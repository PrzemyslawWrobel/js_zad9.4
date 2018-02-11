var z = prompt('podaj zmienną ');

function drawTree (z) {
	
	for (var i = 0; i < z; i++) {
		var star = "";

		for(var j = 0; j <= i; j++) {
			star += "*";
		}
	
	console.log(star);
	}
}

drawTree (z);