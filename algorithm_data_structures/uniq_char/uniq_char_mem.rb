def uniq_mem( str)
    # iterate through the string
    str.each_char.with_index do |lett1, ind1| 
        # iterate through the entire sring again
        str.each_char.with_index do | lett2, ind2|
            if ((ind1 != ind2) && lett1 == lett2)
                # if character is present => we found a duplicate char *return false
                return false
            end
        end
        # otherwise we did not find a duplicate move on to the next letter
    end
    return true 
end

# what if we could not use an additional data structure as a hash
# then for each letter we need to iterate over the remaining letters to find a duplicate 

puts (uniq_mem("Calvin") == true)
puts (uniq_mem("CalvinC") == false)
puts (uniq_mem("CCalvin") == false)
