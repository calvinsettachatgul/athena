# count_to_num

def count_to_num(num)

  # base case index = num
  if num == 0
    return num
  end
  
  # recursive case
  puts num
  num + count_to_num(num-1)
end

puts count_to_num(5) == 5 + 4 + 3 + 2 + 1
