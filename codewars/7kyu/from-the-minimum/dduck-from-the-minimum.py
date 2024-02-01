# https://www.codewars.com/kata/5ac6932b2f317b96980000ca/

from unittest import TestCase

min_value = lambda digits: int("".join(map(str, sorted(list(set(digits))))))

TestCase().assertEqual(min_value([1, 3, 1]), 13)
TestCase().assertEqual(min_value([4, 7, 5, 7]), 457)
TestCase().assertEqual(min_value([4, 8, 1, 4]), 148)
