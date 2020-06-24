# does-my-number-look-big-in-this
# https://www.codewars.com/kata/5287e858c6b5a9678200083c

from unittest import TestCase

from functools import reduce


def narcissistic(value):
    length = len(str(value))
    return value == reduce(lambda a, b: a + b, [int(char) ** length for char in str(value)])


TestCase().assertEqual(narcissistic(7), True, '7 is narcissistic');
TestCase().assertEqual(narcissistic(371), True, '371 is narcissistic');
TestCase().assertEqual(narcissistic(122), False, '122 is not narcissistic')
TestCase().assertEqual(narcissistic(4887), False, '4887 is not narcissistic')
