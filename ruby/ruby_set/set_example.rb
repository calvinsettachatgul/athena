require 'set'

my_set = Set.new()

my_set.add(1)
my_set.add(2)
my_set.add(3)

puts "my_set", my_set

my_set.each do | elem | 
    puts elem
end
