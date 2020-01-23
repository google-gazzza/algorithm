# https://www.codewars.com/kata/55caf1fd8063ddfa8e000018

from unittest import TestCase

arithmetic_sequence_elements = lambda a, r, n: str([x + r * i for i, x in enumerate([a] * n)])[1:-1]

TestCase().assertEqual(arithmetic_sequence_elements(1, 2, 5), '1, 3, 5, 7, 9')
TestCase().assertEqual(arithmetic_sequence_elements(1, 0, 5), '1, 1, 1, 1, 1')
TestCase().assertEqual(arithmetic_sequence_elements(1, -3, 10), '1, -2, -5, -8, -11, -14, -17, -20, -23, -26')
