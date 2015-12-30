from datetime import datetime
print "We imported datetime module functions datetime"

now = datetime.now()
print "We created a python variable now representing the current date with datetime.now()"

print "Let's print the current year, month and day"
print now.year
print now.month
print now.day
