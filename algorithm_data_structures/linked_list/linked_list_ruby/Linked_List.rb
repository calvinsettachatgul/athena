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
			puts current_node.value
			current_node = current_node.next
		end
	end
	def last()
		current_node = @head
		while(current_node.next != nil)do
			current_node = current_node.next
			
		end		
		last = current_node
		return last
	end
	def insert_end(value)
		last_node = self.last()
		insert_node = Node.new(value)
		last_node.next = insert_node

	end
end
