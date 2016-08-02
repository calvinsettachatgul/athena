def print_unordered_pairs( arr )
	arr.each do | val1 |
		arr.each do | val2 |
			puts "#{val1} #{val2}"
		end
	end
end

def print_unordered_pairs2( arr )
	arr_size = arr.size

	for val1_index in 0...arr_size do
		for val2_index in val1_index...arr_size do
			puts "#{arr[val1_index]} #{arr[val2_index]}"
		end
	end

end

arr = [1, 2, 3, 4, 5]

print_unordered_pairs( arr )

print_unordered_pairs2( arr )
