# https://www.codewars.com/kata/maximum-multiple

max_multiple = lambda divisor, bound: (bound // divisor) * divisor;

print(max_multiple(2, 7), 6)
print(max_multiple(3, 10), 9)
print(max_multiple(7, 17), 14)
print(max_multiple(10, 50), 50)
print(max_multiple(37, 200), 185)
print(max_multiple(7, 100), 98)
