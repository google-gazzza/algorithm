# Find the unique number
# https://www.codewars.com/kata/585d7d5adb20cf33cb000235/

from unittest import TestCase


def find_uniq(arr):
    reversed_arr = arr[::-1]
    arr_len = len(arr)

    for v in arr:
        if arr.index(v) == (arr_len - reversed_arr.index(v) - 1):
            return v


TestCase().assertEqual(find_uniq([1, 1, 1, 2, 1, 1]), 2)
TestCase().assertEqual(find_uniq([0, 0, 0.55, 0, 0]), 0.55)
TestCase().assertEqual(find_uniq([3, 10, 3, 3, 3]), 10)
