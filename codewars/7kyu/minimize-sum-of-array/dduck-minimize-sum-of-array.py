# https://www.codewars.com/kata/5a523566b3bfa84c2e00010b

from unittest import TestCase


def min_sum(arr):
    sorted_array = sorted(arr)
    return sum([sum([sorted_array[x] * sorted_array[(x + 1) * -1]]) for x in range(len(sorted_array) // 2)])


TestCase().assertEqual(min_sum([5, 4, 2, 3]), 22)
TestCase().assertEqual(min_sum([12, 6, 10, 26, 3, 24]), 342)
TestCase().assertEqual(min_sum([9, 2, 8, 7, 5, 4, 0, 6]), 74)

"""
Best practice in codewars
def min_sum(arr):
    arr = sorted(arr)
    return sum(arr[i]*arr[-i-1] for i in range(len(arr)//2))
"""
