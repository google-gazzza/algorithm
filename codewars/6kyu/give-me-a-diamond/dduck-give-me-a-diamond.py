# Give me a Diamond
# https://www.codewars.com/kata/5503013e34137eeeaa001648/

from unittest import TestCase


def diamond(n, count=1, result=''):
    if n % 2 == 0 or n < 1:
        return None
    if n >= count:
        diamondSize = abs(n - abs(n - (2 * count - 1)))
        emptySpaceSize = int((n - diamondSize) / 2)
        emptySpace = " " * emptySpaceSize
        result += emptySpace + ("*" * diamondSize) + "\n"

    if n == count:
        return result

    return diamond(n, count + 1, result)


expected = " *\n"
expected += "***\n"
expected += " *\n"
TestCase().assertEqual(diamond(1), "*\n")
TestCase().assertEqual(diamond(2), None)
TestCase().assertEqual(diamond(3), expected)
TestCase().assertEqual(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
TestCase().assertEqual(diamond(0), None)
TestCase().assertEqual(diamond(-3), None)
