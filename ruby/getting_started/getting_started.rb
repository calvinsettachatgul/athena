# Basics of Ruby

# Ruby is not a compiled language you can execute the code with the ruby interpreter at run time without a compiler

# you don't need to declare variables befroe assignem them.  You also don't have to specify a type.  A strongly typed language is more often likely to generate an error or refuse to compile (if it is a compiled language) if the argument passed to a function does not closely match the expected type.  Weakly typed languages may produce unpredictable results or may perform implicit type conversion.

#  a related concept is latent typing

#  Integers belong to the class Fixnum

# Math operations

# Arithmetic

a = 1

b = 2

puts "value of a is #{a}"

puts "value of b is #{b}"

puts "value of c is #{a} + #{b}"
p c = 1 + 2



# Strings

# Define a string literal

first_string = "Hello"

second_string = 'World'

puts "example of concatenation"
puts " "
puts "we can add 2 string variable together"
puts "#{first_string} #{second_string}"

# String Methods

# Methods have a receiving object and can have arguments

puts "first_string.upcase"
p first_string.upcase

puts "-32.abs"
p -32.abs
puts " "

puts "The above examples show the String method upcase and the number method abs which returns the absolute value of a number"

#  Escape sequences

puts "new line"
puts "\\n"

puts "tab"
puts "\\t"

puts "double-quotes"
puts '\"'

puts "single-quote"
puts "\\'"

puts "backslash"
puts "\\\\"

# gets takes command line input
puts "type a string:"
# input_variable = gets.chomp

# p input_variable

# What are the methods that are availabe to an object

puts "to get the available methods we can write object.methods"

puts "string_variable = \"hello\""
string_variable = "hello"

puts "string_variable.methods"
p string_variable.methods

puts "we can list the class of different objects"

puts 42.class
puts "hello".class
puts true.class

puts " "
puts " "
puts "Generating a Random number"

puts "rand(100)"
puts "the above command generates a random number between 0 and 99"

puts "to generate a random number between 1 and 100 we add 1"
puts "rand(100) + 1"
p rand(100) + 1

# Converting string to numbers
puts "number_string = \"10\""
number_string = "10"
puts "number_string.to_i"
# puts number_string + 1

puts "the above line generates an error"
puts "getting_started.rb:100:in `+': no implicit conversion of Fixnum into String (TypeError)"
number = 100
puts "number will print a string version of the number"


puts "number_string = number.to_s"

# other conversions
puts "other common conversions"
puts "to_s"
puts "to_i"
puts "to_f"

# Conditonals

# ==, > , <, !, &&, ||

# ! this is the boolean negation operator also called not

#  The opposite of if is unless

puts "The below conditional statement seems awkward"

light = "green"

unless light == "red"
  puts "Go!"
end

puts "To make the statement more readable and succinct"

unless light == "red"
  puts "Go!"
end


puts " "
puts " "

# Loops
puts "Loops"
# use a loop to execute a segment of code repeatedly
#  when you need one ore more statements executed over and over, you place them inside of a loop

# while loop consists of a while, boolean expression, code to repeat and word end

puts "example of while loop"

number = 1
while number <= 5
  puts number
  number += 1
end

# in the above example there is a start of the loop initated by the keyword while along with a condition on the same line

# after this line there is code to be executed before the keyword end which signifies the end of the code to repeat

# just as unless is the conterpart of if
# Ruby offers until loop as the counter part to while

# until loop repeats until the condition os struee
# looping while it's false

puts "example of until loop"
number = 1
until number > 5
  puts number
  number += 1
end



puts "Resources:"

puts "Head First Ruby"


# ruby is an interpreted language - you don't have to compile Ruby code before executing it.

# You don't need to declare variables before assigning to them.  You don't have to specify a type.

# Ruby treats everything from a # to the end of the line as a comment and ignores it

#  text with quotation marks is treaded as a string - a series of characters

#  if you include #{} in a Ruby string, the expression in the brackets iwll be interpolated into the string


# Method calls may need one or more arguments, separated by commas.

# Parenthesis are optional around method arguments. Leave them off if you're not passing any arguments.

# use the inspect and p mehtods to view debug output for Ruby objects.

# You can inlcude special characters iwthin double-quoted strings by using escape sequences like \n and \t

# call to_s on almost any object to convert it to a string. Call to_i to a string to convert it to an integer.

# unless is the opposit of if; its code won't execute unless a statement is false.

# until is the opposite of while; it executes repeatedly until a condition is true.

# conditional statements execute code they enclose if a conditional is method
# Loops execute the coee they enclose repeatedly.  They exit when a condition is met.

# 2 Methods and classes

# Defining methods

  #  Parameters

# Calling methods you've defined

#  Method Names
# convention is one or more lower-case words, separated by underscore.  Numbers are legal but rarely used.
# legal for method name to end with question mark or exclmation point(!) these endings have no special meaning in Ruby but are certain conventions around their use.
# legal for method to end in equal sign(=).  Methods ending in this character are used as attribute writes, which we'll be looking at in upcoming sessions on classes. Ruby does treat this ending specially, so don't use it for a reg method, or you may find it acts strangely!

#  Parameters
# need to pass data into your method, you can include one or more parameters after the method separated by commas.  In your method body, parameters can be accessed just like any variable.

def print_area(length, width)
  puts length * width
end

#  Optional Parameters

# there are are default parameters if the argument is commonly used with a specific value

# snake_case
# one or more lower-case words separatedby underscore just like variable Names
def bark

end

def wag_tail

end

# leave parenthesis off method definition if there are no parameters.

# example

def no_args()
  puts "Bad Rubyist!"
end

# if there are parameters , you should always include parenthesis.
# no exceptions to this rule when declaring a  method
# leaving them off is legal but don't do it!

# use one particular argument 90% of the time.  tired of repeating it everywhere

def order_soda(flavor, size = "medium", quantity = 1)
  if quantity == 1
    plural = "soda"
  else
    plural = "sodas"
  end
  puts "#{quantity} #{size} #{flavor} #{plural}, coming right up!"
end


# overrride a default, just provide an argument with the value you want.  And if you're happy with the default, you can skip the argument altogether.

order_soda("orange")
order_soda("lemon-lime", "small", 2)
order_soda("grape", "large")



# irb -I .
#  the -I flag will search the current directory for files to load

# or
# irb
# then require "./vehicle_methods.rb"

# Return value

# implicit return values

# Some messy methods

# Too many arguments

# Too many "if" statements


#Designing a class

# instace vs object

# instance variables
# instance methtods

# What's the difference between a class an an object

# classes are cookie cutters, objects are the cookies they make

# your first class

# creating new instances (objects)

# breaking our giant methods up into classes

# The object-oriented approach

# Creating instances of our new animal classes

# Updating our class diagram with instance methods

# Code Magets


# Code Magnets solution

# there are no dumb questions

# our objects don't " know " their names and ages

#  Too many arguments(again)