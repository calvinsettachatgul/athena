function sumProduct(array){
	var sum = 0;
	var product = 1;
	for(var i = 0; i < array.length; i++){
		sum += array[i];
	}
	for(var j = 0; j < array.length; j++){
		product *= array[j];
	}

	console.log( sum + ", " + product);	
}


arr = [1, 2 ,3];

sumProduct( arr );
