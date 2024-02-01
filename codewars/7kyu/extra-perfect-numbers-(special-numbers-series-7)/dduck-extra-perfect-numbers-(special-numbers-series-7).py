# https://www.codewars.com/kata/5a662a02e626c54e87000123

from unittest import TestCase

extra_perfect = lambda n: [i for i in range(1, n + 1, 2)]

TestCase().assertEqual(extra_perfect(3), [1, 3])
TestCase().assertEqual(extra_perfect(5), [1, 3, 5])
TestCase().assertEqual(extra_perfect(7), [1, 3, 5, 7])
TestCase().assertEqual(extra_perfect(28), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27])
TestCase().assertEqual(extra_perfect(39), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39])
print("<COMPLETEDIN::>")
