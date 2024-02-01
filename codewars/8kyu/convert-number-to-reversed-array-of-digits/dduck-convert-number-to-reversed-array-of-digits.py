# https://www.codewars.com/kata/5583090cbe83f4fd8c000051

from unittest import TestCase

# python 3.x
digitize = lambda n: list(map(int, str(n)[::-1]))

# python 2.x
digitize2 = lambda n: map(int, str(n)[::-1])

TestCase().assertEqual(digitize(35231), [1, 3, 2, 5, 3])
