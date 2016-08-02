var foo = function(){
	var counter = 0;



	var increment = function(){
		counter = counter + 1;
	}
	
	var look = function(){
		console.log(counter);
	}

	module_counter = {
				increment: increment,
				look: look,
	      		 }

	return module_counter;
}

var my_counter = foo()

my_counter.look();

my_counter.increment();

my_counter.look();

exports.foo = foo
