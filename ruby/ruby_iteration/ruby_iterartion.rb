require "pry"

puts "Ruby Iteration"
# Ruby While Statement

## syntax
'''
while condition [do]
    code
end
'''

puts "running example of iteration"
puts "running while loop"
i = 0
num = 5
while i < num do 
    puts ("Inside the loop i = #{i}")
    i += 1
end

## ruby while modifier
'''
code while condition

OR

begin 
    code 
end while condition
'''
## example
puts "running do while loop with begin"
i = 0 
num = 5 
begin
    puts ("Inside the loop i = #{i}")
    i += 1
end while i < num

puts "running do while loop with do kernel loop"
i = 0 
num = 5 
loop do 
    puts ("Inside the loop i = #{i}")
    i += 1
    break if i >= num
end 

# ruby until statement
'''
until condtion do
    code 
end
'''

puts "running until loop"
i = 0 
num = 5

until i > num do 
    puts ("inside the loop i = #{i}")
    i += 1;
end


## ruby until modifier 

# ruby for statement
'''
for variable [, variable... ] in expression [do]
    code
end
'''

# example

puts "for in loop using range operator"
puts "------------------------------"

for i in 0...5 
    puts "value of local variable is  #{i}"
end

# for in loop almost exactly equivalent to the following 
# (expression).each do | variable[, variable...]} code end
''' 
for loop doesn\'t create a new scope for local variables
for loops expression separarted from code by the reserved word do a new line or semicolon
creating a new scope for local variables
'''

puts "Using range operator to create an iterable object"
puts "------------------------------"

(0..5).each do |i|
    puts "Value of local variable is #{i}"
end

puts "Iteration over array objects"
puts "------------------------------"

puts "my_arr = [1,2,3,4,5]"
my_arr = [1,2,3,4,5]

my_arr.each do |i|
    puts "Value of local variable is #{i}"
end

# ruby break statement
puts "Flow Control Iteration over array objects break statement"
puts "break will stop the iteration when condition i == 3 is met"
puts "------------------------------"

my_arr.each do |i|
    if( i == 3)
        break
    end
    puts "Value of local variable is #{i}"
end

# ruby next statement
puts "Flow Control Iteration over array objects next statement"
puts "next will skip the current execution and continue the iteration when condition i == 3 is met"
puts "called continue in python"
puts "skipping execution when i == 3"
puts "------------------------------"

my_arr.each do |i|
    if( i == 3)
        next
    end
    puts "Value of local variable is #{i}"
end

# ruby redo statement
puts "Flow Control Iteration over array objects redo statement"
puts "current iteration will repeat when condition i == 3 is met"
puts "there still has to be a condition when the redo statement stops"

my_arr = [
            {val: 1, error:false},
            {val: 2, error:false},
            {val: 3, error:true},
            {val: 4, error:false},
            ]

my_arr.each do |message|

    if (message[:error] == true)
        puts "found error"
        message[:error] = false
        redo 
    else
        puts "val is #{message[:val]} error is #{message[:error]}"
    end
    
end

# ruby retry statement rescue block 
puts "Flow Control Iteration over array objects retry statement"
puts "retry will make iteration start over when condition i == 3 is met"
puts "my_arr = [1,2,3,4,5]"
my_arr = [1,2,3,4,5]
begin
my_arr.each do |i|
    raise if i == 3
    puts "Value of local variable is #{i}"
end
rescue
    puts "in rescue"
    puts "Value of local variable is #{i}"
    my_arr = [1,2]
    puts "changing my_arr to [1,2]"
    retry
end

