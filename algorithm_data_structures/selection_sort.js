  /**********************************************************
   *                                                        *
   *  Problem: Selection Sort                               *
   *                                                        *
   *  Prompt: Given an unsorted array of numbers,           *
   *          return a sorted array using insertion sort.   *
   *                                                        *
   *  Input: An unsorted array                              *
   *  Output: A sorted array                                *
   *                                                        *
   *  Example: input = [8,3,2,10] output = [2,3,8,10]       *
   *                                                        *
   *  What are the time and auxilliary space complexity?    *
   *  What is the best case time complexity?                *
   *                                                        *
   **********************************************************/

var selectionSort = function(input){
  // console.log(input);
  var lastIndexSorted = 0;

  for(var i = 0; i < input.length; i++){
    var minimumVal = input[i];
    // iterate over teh lastIndexSorted
    for(var j=i; j < input.length; j++){
      // console.log(input[j]);
      minimumVal = input[i]
      var minIndex = i;
      if( input[j] < minimumVal){
        //switch the current last sorted with the current element at j
        minimumVal = input[j];
        minIndex = j;
        // console.log("min val is")
        // console.log(minimumVal)


      }

        // console.log("found min is");
        // console.log(minimumVal);
        input[minIndex] = input[i];
        input[i] = minimumVal;

    }
  }

  return input


}

var  insertion = function(input){

}

var bubbleSort = function(input){

}

var arr = [6,100,2,3, 5, 4];
console.log(selectionSort(arr));
