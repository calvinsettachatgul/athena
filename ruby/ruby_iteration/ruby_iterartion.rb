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

(0..5).each do |i|
    puts "Value of local varialbe is #{i}"
end

# ruby break statement
# ruby next statement
# ruby redo statement
# ruby retry statement


