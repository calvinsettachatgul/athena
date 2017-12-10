// javascript for loop 

/* 
loop initialization 
test statement 
iteration statement

for (initialization; test condition; iteration statement){
    statement(s) to be executed if test condition is true
}

*/

// For loop example

for( var count = 0 ; count < 10; count++){
    console.log("Current count : " + count);
}

// for in loop used to loop through an object's properties
/*

for (variablename in object){
    statement or block to execute
}

*/

var myObj = {
                firstName: "Calvin",
                lastName: "Settachatgul",
                age: "102"
            }

for (aProp in myObj){
    console.log(aProp);
    console.log(myObj[aProp]);
}

//  Iteration over an array
/*
    Array.forEach takes a function as a parameter
    the function argument is the element
    which can be referenced inside the function block for execution
*/
console.log("Example of Iteration over an array with forEach);

var my_arr = [1,2,3,4];

my_arr.forEach( function(el){
    console.log(el);
});
