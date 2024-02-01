# https://www.codewars.com/kata/5572f7c346eb58ae9c000047/train/python

from unittest import TestCase


def pattern(n):
    count = 1
    output = ""

    while count <= n:
        output += "\n" + (str(count) * count)
        count += 1

    return output[1:]


TestCase().assertEqual(pattern(1), "1")
TestCase().assertEqual(pattern(2), "1\n22")
TestCase().assertEqual(pattern(5), "1\n22\n333\n4444\n55555")
