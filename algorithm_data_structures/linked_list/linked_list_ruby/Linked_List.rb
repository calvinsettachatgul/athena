require_relative 'Node'
class LinkedList 
	attr_accessor :head
	def initialize(value)
		head_node = Node.new(value)
		self.head = head_node
	end

	def print_list()
		current_node = @head
		while (current_node != nil) do
			puts "hello"
			puts current_node.value
			current_node = current_node.next
		end
	end
end
