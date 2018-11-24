// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
/*
 *
 * An isogram is a word that has no repeating letters, 
 * consecutive or non-consecutive. 
 * Implement a function that determines whether a string 
 * that contains only letters is an isogram. 
 * Assume the empty string is an isogram. Ignore letter case.
 *
 * isIsogram( "Dermatoglyphics" ) == true
 * isIsogram( "aba" ) == false
 * isIsogram( "moOse" ) == false // -- ignore letter case
*/

function isIsogram (inputString) {
  let lettFrequency = {};
  let isIsogram = true;
  // count the frequency
  for(let i = 0; i< inputString.length; i++){
    let lett = inputString.charAt(i);
    if(!lettFrequency[lett]){
      lettFrequency[lett] = 0
    }
    lettFrequency[lett]++
    if(lettFrequency[lett] > 1){
      isIsogram = false;
    };
    
  }
  return isIsogram;
}

module.exports = isIsogram;
