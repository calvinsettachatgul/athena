// Javascript class prototype example

function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype = {
	introduce: function(){
		console.log("Hello my name is " + this.firstName + " " + this.lastName);
	}
}

// driver code
me = new Person("Calvin", "Settachatgul");
me.introduce();
