print ("Welcom to the pig latin translator")
original = input("Enter a word:")

pyg = 'ay'
word = original.lower()
first = word[0]
new_word = word + first + pyg


if len(original) > 0 and original.isalpha():

    print (original[1:len(new_word)])
else:
    print ("empty")



