# https://www.codewars.com/kata/5949481f86420f59480000e7/

from unittest import TestCase

oddOrEven = lambda arr: "odd" if sum(arr) % 2 else "even"

TestCase().assertEqual(oddOrEven([0, 1, 2]), 'odd')
TestCase().assertEqual(oddOrEven([0, 1, 3]), 'even')
TestCase().assertEqual(oddOrEven([1023, 1, 2]), 'even')
