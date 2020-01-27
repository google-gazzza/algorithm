# https://www.codewars.com/kata/5a63948acadebff56f000018

from unittest import TestCase

import functools

max_product = lambda lst, n: functools.reduce(lambda a, b: a * b, sorted(lst)[-n::])

TestCase().assertEqual(max_product([0] * 10, 5), 0)
TestCase().assertEqual(max_product([4, 3, 5], 2), 20)
TestCase().assertEqual(max_product([10, 8, 7, 9], 3), 720)
TestCase().assertEqual(max_product([8, 6, 4, 6], 3), 288)
TestCase().assertEqual(max_product(list(range(10, -1, -1)), 5), 10 * 9 * 8 * 7 * 6)
TestCase().assertEqual(max_product([10, 2, 3, 8, 1, 10, 4], 5), 9600)
TestCase().assertEqual(max_product([13, 12, -27, -302, 25, 37, 133, 155, -1], 5), 247895375)
TestCase().assertEqual(max_product([-4, -27, -15, -6, -1], 2), 4)
TestCase().assertEqual(max_product([-17, -8, -102, -309], 2), 136)
TestCase().assertEqual(max_product([10, 3, -27, -1], 3), -30)
TestCase().assertEqual(max_product([14, 29, -28, 39, -16, -48], 4), -253344)
