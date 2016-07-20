def first_times_last(arr)
	arr_length = arr.size
	result = nil
	if ( arr_length > 1)
		result = arr[0] * arr[-1]
	end
	result
end

arr = [ 3, 4, 5]
print first_times_last( arr ) 


