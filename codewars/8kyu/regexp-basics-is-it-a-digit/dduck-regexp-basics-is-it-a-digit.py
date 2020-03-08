# https://www.codewars.com/kata/regexp-basics-is-it-a-digit/

import re


def is_digit(n):
    return re.search("^\d$", n) != None and len(n) == 1


print(is_digit(""), False)
print(is_digit("7"), True)
print(is_digit(" "), False)
print(is_digit("a"), False)
print(is_digit("a5"), False)
print(is_digit("1"), True)
print(is_digit(" 1"), True)
print(is_digit("1 "), True)
