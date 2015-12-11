class Person
  attr_reader :firstname
  attr_writer :lastname
  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def introduce

    puts "Hello my name is #{@firstname} #{@lastname}"

  end


  end #end of person class

