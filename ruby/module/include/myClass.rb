require './Mod_A'
class ClassA
    include Mod_A
    def print_classA
        print_mod_A
    end
end
