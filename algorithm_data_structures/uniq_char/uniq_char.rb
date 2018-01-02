def uniq( str)
    seen = Hash.new(false)
    # iterate through the string
    str.each_char do | lett| 
        # check if the character is in a dictionary
        if ( seen[lett])
            # if character is present => we found a duplicate char *return false
            return false
        end
        # otherwise we did not find a duplicate and store the character in a dictionary
        seen[lett] = true
    end
    return true 
end

# what if we could not use an additional data structure as a hash
# then for each letter we need to iterate over the remaining letters to find a duplicate 

puts (uniq("Calvin") == true)
puts (uniq("CalvinC") == false)
puts (uniq("CCalvin") == false)
