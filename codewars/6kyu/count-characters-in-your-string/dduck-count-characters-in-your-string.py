# Count characters in your string
# https://www.codewars.com/kata/52efefcbcdf57161d4000091/

from unittest import TestCase


def count(string):
    result = {}
    for char in list(string):
        if char in result:
            result[char] = result[char] + 1
        else:
            result[char] = 1
    return result


TestCase().assertEqual(count('aba'), {'a': 2, 'b': 1})
TestCase().assertEqual(count(''), {})
