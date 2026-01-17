user = 'Wisdom Sprouts'
print(user)
age = 10
floatValue = 23.78
isStudent = True

print(age)
print(floatValue)
print(isStudent)

# Data types in python 
print(type(user))
print(type(age))
print(type(floatValue))
print(type(isStudent))

# check even odd number

num = 41 

if num %2 == 0 :
    print(num,"is even number")
else:
    print(num,"is odd number")

# # Store a user profile and print it in a sentence.

# name = input("Enter name")
# collegeName = input("Enter college name")
# age = input("Enter age")

# print("Hello ", name, ". You are studing in ", collegeName,". your age is ",age)

# # Take user input for three numbers and find the average.
# n1 =int(input("enter number 1"))
# n2 = int(input("enter number 2"))
# n3 = int(input("enter number 3"))

# sum = n1+n2+n3
# print(sum)
# avg = sum/ 3
# print(avg)

#Create a list of your 5 favorite movies. 
movies = ["MONe","MTwo","MThree","MFour","MFive"]

# Make a dictionary with keys: name, age, course.
userObject = {"name":"WIsdom Sprouts", "age":40, "course":"Python fullstack"}

# Add and remove items from a set .
fruits = {'Apple'}
fruits.add("Banana")
print(fruits)

fruits.remove("Apple")
print(fruits)

# Sort a list of numbers.

numberForSort = [78,98,34,92,17]
numberForSort.sort()
print(numberForSort)

for value in numberForSort:
    print(value)

for key,value in userObject.items():
    print(key,value)


# Print even numbers from 1 to 20 using a for loop. 

for i in range(1,21):
    if i%2 == 0:
        print(i)


# Find the factorial of a number.
number = 10
factorial = 1

for i in range(1,number+1):
    factorial  *= i

print(factorial)


# Sum all numbers in a list using a while loop.

listOne = [10,20,30,40,50,60]

total = 0

i = 0
while i<len(listOne):
    total = total + listOne[i]
    i += 1

print(total)

# Print all vowels in a string.

stringOne = "Hello World"
vowels = "aeiouAEIOU"
count = 0
for ch in stringOne:
    if ch in vowels:
        count+=1
        print(ch)
print(count)