var z = prompt('podaj zmienną ');

function drawTree (z) {
	
	for (var i = 0; i <= z; i++) {
		var star = "";
		var spacja = "";
		

		for(var j = 0; j < ((i * 2) - 1); j++){
                star += "*";
        } 
    
        for (var k = ((z*2)) ; k> i; k--){
        	spacja += " ";
        }
	
	console.log(spacja + star);
	/*console.log(star);*/
	}
}

drawTree (z);