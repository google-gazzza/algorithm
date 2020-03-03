# https://www.codewars.com/kata/54c27a33fb7da0db0100040e

from unittest import TestCase

import math

is_square = lambda n: True if n == 0 or (n > 0 and n == int(math.sqrt(n)) ** 2) else False

TestCase().assertEqual(is_square(-1), False, "-1: Negative numbers cannot be square numbers")
TestCase().assertEqual(is_square(0), True, "0 is a square number")
TestCase().assertEqual(is_square(3), False, "3 is not a square number")
TestCase().assertEqual(is_square(4), True, "4 is a square number")
TestCase().assertEqual(is_square(25), True, "25 is a square number")
TestCase().assertEqual(is_square(26), False, "26 is not a square number")
