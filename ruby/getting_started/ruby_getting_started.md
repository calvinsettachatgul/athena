# Ruby

*  High level scripting language

*  Fairly heavy with built in functions as opposed to Java and C++

### Ruby Array

*  An Array is an ordered list of data

>  arr = [1, 2, 3, 4, 5]

*  Ruby provides ways to access the element of an array with a 0 ordered indexing system

>  first_index = 0

>  arr[first_index]  => ouput: 1

>  second_index = 1

>  arr[second_index] => output: 2

*  Alternate syntax for accessing an element of an arary

>  arr.at(0) => ouput: 1

*  Accessing a range of indeces

>  range_inclusive = 0..3

>  range_last_excluded = 0...3

>  arr[range_inclusive] => output: [1,2,3, 4]

>  arr[range_last_excluded] => output: [1,2,3]

*  Accessing elements at the end of the array

  *  We can do this with negative index

  *  The -1 index in ruby is defined as the last index of the array always

>  arr[-1] => output: 5

*  Other array keywords

  *  first

  >  arr.first => ouput: 1

  *  last

  >  arr.last => output: 5

*  Other array methods invoked with arr.____

  *  take

  >  arr.take(n) #the first n elements of array

  >  arr.take(3) ouput => [1,2, 3]

  *  drop

  >  arr.drop(n)  # take all the elements except the first n elements of the array

  >  arr.drop(3) output => [4,5]