# https://www.codewars.com/kata/54ba84be607a92aa900000f1

is_isogram = lambda str: len(set(str.upper())) == len(str.replace(" ", ""))

# your code here
# const isIsogram = (str) => new Set(str.toUpperCase().split('')).size === str.replace(' ', '').length;
#
# console.log(isIsogram('Dermatoglyphics'), true);
# console.log(isIsogram('isogram'), true);
# console.log(isIsogram('aba'), false, 'same chars may not be adjacent');
# console.log(isIsogram('moOse'), false, 'same chars may not be same case');
# console.log(isIsogram('isIsogram'), false);
# console.log(isIsogram(''), true, 'an empty string is a valid isogram');
print(is_isogram("Dermatoglyphics"), True)
print(is_isogram("isogram"), True)
print(is_isogram("aba"), False, "same chars may not be adjacent")
print(is_isogram("moOse"), False, "same chars may not be same case")
print(is_isogram("isIsogram"), False)
print(is_isogram(""), True, "an empty string is a valid isogram")
