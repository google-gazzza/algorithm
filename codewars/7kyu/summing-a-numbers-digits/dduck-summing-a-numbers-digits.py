# https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

from unittest import TestCase

sum_digits = lambda number: sum(list(map(int, str(abs(number)))))

TestCase().assertEqual(sum_digits(10), 1)
TestCase().assertEqual(sum_digits(99), 18)
TestCase().assertEqual(sum_digits(-32), 5)
