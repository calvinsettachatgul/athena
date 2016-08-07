var counter1 = function(arr){
	console.log("this is counter module");	
}

var counter2 = function(arr){
	return 'There are ' + arr.length + ' elements in this array';
};


counter1( ['calvin' , 'patson', 'mom', 'dad']);
console.log("You've require'd module counter");

module.exports = counter2;


