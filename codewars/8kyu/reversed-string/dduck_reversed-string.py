# https://www.codewars.com/kata/5168bb5dfe9a00b126000018

def solution(string):
    return ''.join(str(x) for x in list(reversed(string)))

print('123'.split())
print(solution('world'))
print(solution('world') == 'dlrow')
