# https://www.codewars.com/kata/alphabetical-addition

def add_letters(*letters):
    return chr((sum([ord(x) - 96 for x in letters or 'z']) - 1) % 26 + 97)


print(add_letters('a', 'b', 'c'))
# = 'f'
print(add_letters('a', 'b'))
# = 'c'
print(add_letters('z'))
# = 'z'
print(add_letters('z', 'a'))
# = 'a'
print(add_letters('y', 'c', 'b'))
# = 'd' # notice the letters overflowing
print(add_letters())
# = 'z'
