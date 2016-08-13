# a. Write down pseudocode for solving th towers of Hanoi (10 points)

# the base case is n = 1

=begin
input: tree of size n
ouput: print the steps to move which disk from and to target

the base case is n = 1 
from the input n
check if the input has reached the base case

if n > 1
solve the smaller problem (n == n - 1)
	move it from from to spare with to as spare
solve the base case (n == 1)
	move it from from to the target with spare as spare
solve the spare problem
	move it from the spare to the target with from as the spare

=end

def print_move ( from , to)
	return "move from #{from} to #{to}"
end

# puts print_move("stack_from", "stack_to")

def tower_hanoi_move( number_of_disks, from, to , spare)
	if (number_of_disks == 1) 
		puts print_move( from, to)
	else
		# puts "in the recursive case - need to do more work"
		# solve n-1  move it from from to spare with to as spare
		tower_hanoi_move( number_of_disks - 1, from , spare, to)
		# solve n = 1 move it from from to the target with spare as spare
		tower_hanoi_move( 1, from, to, spare)
		# solve the spare problem move it from the spare to the target with from as the spare
		tower_hanoi_move( number_of_disks - 1 , spare, to , from)
		
	end
end

puts tower_hanoi_move( 5, "stack_from", "stack_to", "spare")

# pskills.com interview questions
