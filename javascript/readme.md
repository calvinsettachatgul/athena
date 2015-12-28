##  Javascript

*  Javascript is a client side language originally intended for providing dynamic functionality for websites.

*  Nodejs made an appearance and interprets javascript to be be used server side as well.

##  Array filter function

  *  filter takes a function as an argument and will return an arrays elements that return true for the function

  *  example syntax

  *  var filterFunction = function(number){ return number % 2 === 0 } // this is a fitler function that returns true if the input is divisible by 2

  *  var filteredArray = Array.filter(filterFunction);

    *  Use case

    *  >var array = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
       >var findEven = function(number) { return number % 2 === 0};
       >var evenElements = array.filter(findEven);
    * => [2, 4, 6, 8, 10];
