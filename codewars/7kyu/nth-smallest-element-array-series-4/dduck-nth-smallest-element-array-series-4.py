# nth-smallest-element-array-series-4
# Nth Smallest Element (Array Series #4)
# difficulty: 7kyu
# https://www.codewars.com/kata/5a512f6a80eba857280000fc

def nth_smallest(arr, pos):
    return sorted(arr)[pos - 1]


from unittest import TestCase

TestCase().assertEqual(nth_smallest([3, 1, 2], 2), 2)
TestCase().assertEqual(nth_smallest([15, 20, 7, 10, 4, 3], 3), 7)
TestCase().assertEqual(nth_smallest([-5, -1, -6, -18], 4), -1)
TestCase().assertEqual(nth_smallest([-102, -16, -1, -2, -367, -9], 5), -2)
TestCase().assertEqual(nth_smallest([2, 169, 13, -5, 0, -1], 4), 2)
