# https://www.codewars.com/kata/523f5d21c841566fde000009

from unittest import TestCase


def array_diff(a, b):
    b_dict = dict.fromkeys(b)
    return list(filter(lambda key: key not in b_dict, a))


TestCase().assertEqual(array_diff([1, 2], [1]), [2], "a was [1,2], b was [1], expected [2]")
TestCase().assertEqual(array_diff([1, 2, 2], [1]), [2, 2], "a was [1,2,2], b was [1], expected [2,2]")
TestCase().assertEqual(array_diff([1, 2, 2], [2]), [1], "a was [1,2,2], b was [2], expected [1]")
TestCase().assertEqual(array_diff([1, 2, 2], []), [1, 2, 2], "a was [1,2,2], b was [], expected [1,2,2]")
TestCase().assertEqual(array_diff([], [1, 2]), [], "a was [], b was [1,2], expected []")

"""
best practice in codewars

def array_diff(a, b):
    return [x for x in a if x not in b]

"""
