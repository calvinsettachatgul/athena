def factorial(num)


  if (num == 0)
    print " = "
    return 1

  else
    print "* #{num} "
    return num * factorial(num-1)
  end
end


puts "This is factorial(10)"
p factorial(10)


puts "This is factorial(20)"
p factorial(20)