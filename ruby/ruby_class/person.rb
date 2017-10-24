# Ruby class example

class Person
  attr_reader :firstName
  attr_writer :lastName
  def initialize(firstname, lastname)
    @firstName = firstName
    @lastName = lastName
  end

  def introduce
    puts "Hello my name is #{@firstName} #{@lastName}"
  end


  end #end of person class

# driver code

me = Person.new("Calvin", "Settachatgul")
me.introduce

