# https://www.codewars.com/kata/5e4217e476126b000170489b/

from unittest import TestCase


def polydivisible(x):
    string = str(x)

    def is_polydivisible(i, x):
        return int(x[:i]) % i == 0

    return all([is_polydivisible(i, string) for i in range(1, len(string) + 1)])


TestCase().assertEqual(polydivisible(1232), True)
TestCase().assertEqual(polydivisible(123220), False)
TestCase().assertEqual(polydivisible(0), True)
TestCase().assertEqual(polydivisible(1), True)
TestCase().assertEqual(polydivisible(141), True)
TestCase().assertEqual(polydivisible(1234), False)
TestCase().assertEqual(polydivisible(21234), False)
TestCase().assertEqual(polydivisible(81352), False)
TestCase().assertEqual(polydivisible(987654), True)
TestCase().assertEqual(polydivisible(1020005), True)
TestCase().assertEqual(polydivisible(9876545), True)
TestCase().assertEqual(polydivisible(381654729), True)
TestCase().assertEqual(polydivisible(1073741823), False)
