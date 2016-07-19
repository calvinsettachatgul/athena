def sumProduct( arr ) 
	sum = 0
	product = 1
	for i in 0...arr.size do
		sum += arr[i]
	end
	for j in 0...arr.size do
		product *= arr[j]
	end
	
	puts "#{sum}, #{product}"

end

arr = [1,2,3]
sumProduct( arr)
