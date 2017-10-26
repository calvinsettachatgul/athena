'''
ranges as sequences
ranges as conditions
ranges as intervals
'''

# ranges as sequences
''' 
.. inclusive range
... exclusive range
''' 
range_1to5 = (1..5)
puts range_1to5.to_a
p range_1to5.to_a
range1 = (1..10).to_a
range2 = ('bar'..'bat').to_a

puts "#{range1}"
puts "#{range2}"

# range implement methods that let you iterate over them and test contents in a variety of ways

digits = 0..9
puts digits.include?(5)
ret = digits.min
puts "Min value is #{ret}"

ret = digits.reject { |i| i< 5}
puts "Rejected values are #{ret}"

digits.each do |digit|
    puts "In Loop #{digit}"
end


