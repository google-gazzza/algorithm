# https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/
from unittest import TestCase

array_plus_array = lambda arr1, arr2: sum([sum(arr1), sum(arr2)])

TestCase().assertEqual(array_plus_array([1, 2, 3], [4, 5, 6]), 21)
TestCase().assertEqual(array_plus_array([-1, -2, -3], [-4, -5, -6]), -21)
TestCase().assertEqual(array_plus_array([0, 0, 0], [4, 5, 6]), 15)
TestCase().assertEqual(array_plus_array([100, 200, 300], [400, 500, 600]), 2100)
