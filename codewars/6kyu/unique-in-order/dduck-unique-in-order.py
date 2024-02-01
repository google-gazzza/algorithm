# unique-in-order
# https://www.codewars.com/kata/54e6533c92449cc251001667

from unittest import TestCase


def unique_in_order(iterable=[]):
    arr = list(iterable)
    result = [arr[0]] if len(arr) else []

    for i in range(1, len(iterable)):
        if arr[i] != arr[i - 1]:
            result.append(arr[i])

    return result


TestCase().assertEqual(unique_in_order('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
TestCase().assertEqual(unique_in_order('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D'])
TestCase().assertEqual(unique_in_order([1, 2, 2, 3, 3]), [1, 2, 3])
