# https://www.codewars.com/kata/what-is-between/train/javascript

between = lambda a, b: list(range(a, b + 1))

print(between(1, 4))
# [1, 2, 3, 4];

print(between(-2, 2))
# [-2, -1, 0, 1, 2];

print(between(1, 1))
