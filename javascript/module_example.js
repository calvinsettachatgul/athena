/* 
 * example of node module with require statement
 
>> node 
newFunction = require('./module_example')


*/
let newFunction = function () {
    console.log('this is a new function');
}

module.exports = newFunction;

