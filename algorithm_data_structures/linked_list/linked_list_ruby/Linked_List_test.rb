require_relative 'Linked_List'

my_linked_list = LinkedList.new(1)

puts "my_linked_list before inserting several nodes"
my_linked_list.print_list

my_linked_list.insert_end(2)
my_linked_list.insert_end(3)
my_linked_list.insert_end(4)

puts "my_linked_list after inserting 2, 3, 4"
my_linked_list.print_list
puts "ran the Linked_List_test"
