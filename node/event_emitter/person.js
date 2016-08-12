var events = require('events');

var util = require('util');

var Person = function(name){
	this.name = name;
};

util.inherits( Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu ];

people.forEach( function(person){
	person.on('speak', function(msg){
		console.log(person.name + ' said: ' + msg);
	})
});

james.emit('speak', "hey there");
ryu.emit('speak', "i'm cool");
mary.emit('speak', "no you're not");
