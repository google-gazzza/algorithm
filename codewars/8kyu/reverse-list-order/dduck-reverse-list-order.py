# reverse-list-order
# Reverse List Order
# difficulty: 8kyu
# https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b

from unittest import TestCase


def reverse_list(l):
    return l[::-1]


TestCase().assertEqual(reverse_list([1, 2, 3, 4]), [4, 3, 2, 1])
TestCase().assertEqual(reverse_list([3, 1, 5, 4]), [4, 5, 1, 3])
