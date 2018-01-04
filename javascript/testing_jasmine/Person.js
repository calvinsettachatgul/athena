function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype = {
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;

    },
    sayHello: function(){
        return "Hello, my name is " +  this.getFullName();
    }
}

// Driver Code
let me = new Person("Calvin", "Settachatgul");

// Test
console.log(me.sayHello() == "Hello, my name is Calvin Settachatgul");

