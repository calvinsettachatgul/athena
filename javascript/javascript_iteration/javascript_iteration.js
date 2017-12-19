// javascript for loop 

/* 
loop initialization 
test statement 
iteration statement

for (initialization; test condition; iteration statement){
    statement(s) to be executed if test condition is true
}

*/

let code_str_template = ``

// For loop example
console.log("Example of Iteration with a for loop" );
console.log("******************************" );

for( var count = 0 ; count < 10; count++){
    console.log("Current count : " + count);
}

// for in loop used to loop through an object's properties
/*

for (variablename in object){
    statement or block to execute
}

*/
console.log("Example of Iteration of an object's properties with for...in loop" );
console.log("******************************" );


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
console.log("Example of Iteration over an array with forEach");
console.log("******************************" );

var my_arr = [1,2,3,4];

my_arr.forEach( function(el){
    console.log(el);
});

console.log("Example of for...of statement iterating over iterable objects");
console.log("******************************" );

code_str_template = 
`
>> for (variable of object) {
>>     statement
>> };
`

console.log( code_str_template);

let arr = [3, 5, 7];

for ( var value of arr){
    console.log(value); 
}

console.log("Example of do...while statement");
console.log("******************************" );

code_str_template = 
`
do 
    statement
while (condition);
`

var i = 0; 
if( i == 3){
}
do {
        i += 1;
        console.log(i);
} while (i < 5);



// var i = 0; 
// do {
//     i += 1;
//     console.log(i);
// } while (i < 5);

console.log("End of Javascript Iteration");
