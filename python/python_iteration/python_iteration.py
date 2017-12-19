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


print("Flow Control Break")
print("Break the outer loop if conditional is met")
print("Break the loop if counter = 3")
print("------------------------------")
for i in range(5):
    if( i == 3):
        break
    print(i)

print("Flow Control Continue")
print("Continue the outer loop if conditional is met i == 3")
print("skipping execution for the case of i == 3")
print("Do not execute the remaining code after the continue statement and continue with the rest of the iteration")
for i in range(5):
    if( i == 3):
        continue
    print(i)
print("------------------------------")

print("End of Python Iteration")
