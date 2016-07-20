def most_freq_occur( string )
	#iterate through the string and generate a hash
	letter_frequency = {}
	for char in 0...string.size do
		p string[char]
		if(letter_frequency[string[char]] == nil)
			letter_frequency[string[char]] = 1
		else
			letter_frequency[string[char]] += 1
		end
	end

	#iterateh through the hash and find the max
	max_letter = []
	letter_frequency.each do | letter, freq | 
		if(max_letter.size == 0) 
			max_letter = [letter, freq]
		elsif(max_letter[1] < freq)
			max_letter = [letter, freq]
		end
	end
	p letter_frequency
	max_letter

end


message = "Hello there calvin"

p most_freq_occur( message )
