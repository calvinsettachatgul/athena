##  Python

##  Python import statement

*  example of importing a module in python

*  from datetime import datetime

*  now = datetime.now()

*  print now.year

*  print now.month

*  print now.day

    *  from the above example we import the funnctions of datetime from the module or package datetime

    *  in general we can write
      >  from module_name import function

    *  this gives us the added methods that come with the datetime package including instantiating a date that is datetime.now()

    *  printing out the year, month and day with the subsequent date object calls.

*  The above code is located in the file print_now.py

*  You'll see an output similar to this:

![picture of commandline](/imgs/print_now_output.png "sample of the print_now output")

##  String interpolation

*  syntax

*  '%s , %s, %s' % ( string_variable1, string_variable2, string_variable3)

    *  in the syntax above %s will be a place holder for the string variables in the order they are placed in the parenthesis

*  example code

    *  >  print '%s %s' % ('Hello', 'World!')

    *  => Hello World!

##  Resources

*  [ccodecademy.com python course](https://www.codecademy.com/learn/python)
