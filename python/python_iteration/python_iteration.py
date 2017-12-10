# Python Iteration

# Iteration Over Iterable Objects 

print("Iteration Over Iterable Objects") 
print("------------------------------")

arr = [1,2,3,4,5]

for num in arr:
    print(num)

# While loops

i = 0 

print("Iteration While loop") 
print("------------------------------")

while i < 5:
    print("i = {} i is less than 5".format(i))
    i += 1

if( i >= 5):
    print("i = {} i is not less than 5".format(i))

    
# For loops and creating an Iterable object range()
print("For loops and creating an Iterable object range()")
print("range(5) creates an iterable object from 0 to 4 inclusive")
print("------------------------------")
for i in range(5):
    print(i)

print("End of Python Iteration")

