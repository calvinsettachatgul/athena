def last_product( arr )
	result = nil
	length = arr.size
	if (arr.size > 1)
		result = arr[length - 2] * arr[length - 1]
	end
	result
end

arr = [1,3,4]
print last_product ( arr )
print last_product( arr ) == 12
