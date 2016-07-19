def double(arr)
	result = []
	for i in 0...arr.size do
		result.push(arr[i] * 2)
	end
	result
end


arr = [1,2,3]

p double(arr)

p double(arr) == [2,4,6]

