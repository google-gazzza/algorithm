# https://www.codewars.com/kata/5679aa472b8f57fb8c000047

from unittest import TestCase


def find_even_index(arr):
    right_sum = sum(arr)
    left_sum = 0
    count = len(arr) - 1
    index = 0

    while left_sum != (right_sum - arr[index]) and count:
        v = arr[index]
        left_sum += v
        right_sum -= v
        count -= 1
        index += 1

    return index if left_sum == (right_sum - arr[index]) else -1


TestCase().assertEqual(find_even_index([1, 2, 3, 4, 3, 2, 1]), 3)
TestCase().assertEqual(find_even_index([1, 100, 50, -51, 1, 1]), 1, )
TestCase().assertEqual(find_even_index([1, 2, 3, 4, 5, 6]), -1)
TestCase().assertEqual(find_even_index([20, 10, 30, 10, 10, 15, 35]), 3)
TestCase().assertEqual(find_even_index([20, 10, -80, 10, 10, 15, 35]), 0)
TestCase().assertEqual(find_even_index([10, -80, 10, 10, 15, 35, 20]), 6)
TestCase().assertEqual(find_even_index(list(range(1, 100))), -1)
TestCase().assertEqual(find_even_index([0, 0, 0, 0, 0]), 0, "Should pick the first index if more cases are valid")
TestCase().assertEqual(find_even_index([-1, -2, -3, -4, -3, -2, -1]), 3)
TestCase().assertEqual(find_even_index(list(range(-100, -1))), -1)
