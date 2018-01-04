describe("Person", function(){
    var person;
    beforeEach(function(){
        person = new Person("first_name", "last_name");
    });

    // testing Person properties
    it("it should have a first name #firstName", function() {
        expect(person.firstName).toEqual("first_name");
    });

    it("it should have a last name #lastName", function() {
        expect(person.lastName).toEqual("last_name");
    });

    it("should have a method #sayHello", function(){
        expect(person.sayHello()).toEqual("Hello, my name is first_name last_name");
    })
});

