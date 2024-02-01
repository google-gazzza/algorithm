# sort-the-odd
# https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

from unittest import TestCase

from collections import deque


def sort_array(source_array):
    odd_num = deque(sorted(filter(lambda x: x % 2 == 1, source_array)))
    return list(map(lambda x: odd_num.popleft() if x % 2 == 1 else x, source_array))


TestCase().assertEqual(sort_array([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
TestCase().assertEqual(sort_array([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
TestCase().assertEqual(sort_array([]), [])
