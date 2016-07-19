def print_remainder_pairs(arr)
	for i in 0...arr.size do
		for j in 0...arr.size do
			puts "#{ arr[i] % arr[j]}"
		end
	end
end

arr = [1,2,3,4,5]

print_remainder_pairs(arr)
