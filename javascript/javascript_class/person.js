// Constructor

function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype = {
	sayHello: function(){
		console.log("Hello my name is " + this.firstName + " " + this.lastName);
	}
}

me = new Person("Calvin", "Settachatgul");
me.sayHello();
