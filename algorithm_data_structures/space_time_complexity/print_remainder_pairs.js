function printRemainderPairs (arr) {
	for (var i = 0; i< arr.length; i++){
		for(var j = 0; j< arr.length ; j++){
			console.log( arr[i] % arr[j]);
		}
	}
}


arr = [1,2,3,4,5]
arr = [42, 2, 12, 5, 7, 9 , 1 , 5]

printRemainderPairs(arr);
