# Python class example

class Person:
	def __init__(self, first_name, last_name):
		self.first_name = first_name
		self.last_name = last_name
	
	def introduce(self):
		introduction = "Hello my name is {} {}.".format( self.first_name, self.last_name)
		print( introduction)

me = Person("Calvin", "Settachatgul")

# driver code
print (me)
me.introduce()
