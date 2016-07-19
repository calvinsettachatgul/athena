function double(arr){
	var result = [];
	for (var i = 0; i< arr.length; i++){
		result.push(arr[i] * 2);
	}
	return result;
}

arr = [1,2,3]

arr_double = double(arr);

console.log( arr_double );
