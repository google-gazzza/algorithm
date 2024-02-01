# https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/

from unittest import TestCase

sum_of_minimums = lambda arrays: sum(map(min, arrays))

TestCase().assertEqual(sum_of_minimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9)
TestCase().assertEqual(sum_of_minimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76)
