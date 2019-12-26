# https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case

def to_alternating_case(string):
    return "".join([(lambda c: c.lower() if c.isupper() else c.upper())(char) for char in string])


print('a'.islower())
print(to_alternating_case('aBcDeF'))
