# https://www.codewars.com/kata/count-the-monkeys/

from unittest import TestCase

monkey_count = lambda n: [x for x in range(1, n + 1)]

TestCase().assertEqual(monkey_count(5), [1, 2, 3, 4, 5])
TestCase().assertEqual(monkey_count(3), [1, 2, 3])
TestCase().assertEqual(monkey_count(9), [1, 2, 3, 4, 5, 6, 7, 8, 9])
TestCase().assertEqual(monkey_count(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
TestCase().assertEqual(monkey_count(20), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
