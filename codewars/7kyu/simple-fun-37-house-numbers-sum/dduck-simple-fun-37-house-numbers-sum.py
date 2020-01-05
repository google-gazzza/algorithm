# https://www.codewars.com/kata/simple-fun-number-37-house-numbers-sum

house_numbers_sum = lambda arr: sum(arr[0:arr.index(0)])

tests = [
    # (input, expected),
    ([5, 1, 2, 3, 0, 1, 5, 0, 2], 11),
    ([4, 2, 1, 6, 0], 13),
    ([4, 1, 2, 3, 0, 10, 2], 10),
    ([0, 1, 2, 3, 4, 5], 0),
]

for inp, exp in tests:
    print(house_numbers_sum(inp), exp)
