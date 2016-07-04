require_relative 'Node'
class LinkedList 
	attr_accessor :head
	def initialize(value)
		head_node = Node.new(value)		
	end

	def print_list( head_node)
		current_node = head_node
		while (current_node != null) do
			puts current_node.value
		end
	end
end
