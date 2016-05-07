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

var  insertionSort = function(input){
  console.log(input);
  //iterate over the entire input

  for(var lastSorted = 0 ; lastSorted < input.length ; lastSorted++){
  // check to see if the current value is greater than the last sorted value
  // if the current value is < the value immed to the left then swap

    var currentIndex = lastSorted+1;
    while(input[currentIndex] < input[currentIndex-1]){
      // console.log("we swapped " + input[currentIndex]+ " and " + input[currentIndex-1]);
      swapValues(currentIndex, currentIndex-1);
      currentIndex--;
    }

  }


  // iterate over the sorted values to find the right spot for the current value
  // use swapValues and compare the next left value to the current value


  function swapValues(left, right){
    var leftValueCopy = input[left];
    input[left] = input[right];
    input[right] = leftValueCopy;
  }


  return input;
}

