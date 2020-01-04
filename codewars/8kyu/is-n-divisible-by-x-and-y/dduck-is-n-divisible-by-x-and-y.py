# https://www.codewars.com/kata/5545f109004975ea66000086

is_divisible = lambda n, x, y: (n % x == 0 and n % y == 0)

assert (is_divisible(3, 3, 4) == False)
assert (is_divisible(12, 3, 4) == True)
assert (is_divisible(8, 3, 4) == False)
assert (is_divisible(48, 3, 4) == True)
