# https://www.codewars.com/kata/55edaba99da3a9c84000003b/

from unittest import TestCase

divisible_by = lambda numbers, divisor: list(filter(lambda n: n % divisor == 0, numbers))


TestCase().assertEqual(divisible_by([1, 2, 3, 4, 5, 6], 2), [2, 4, 6])
TestCase().assertEqual(divisible_by([1, 2, 3, 4, 5, 6], 2), [2, 4, 6])
TestCase().assertEqual(divisible_by([1, 2, 3, 4, 5, 6], 3), [3, 6])
TestCase().assertEqual(divisible_by([0, 1, 2, 3, 4, 5, 6], 4), [0, 4])
TestCase().assertEqual(divisible_by([0], 4), [0])
TestCase().assertEqual(divisible_by([1, 3, 5], 2), [])
