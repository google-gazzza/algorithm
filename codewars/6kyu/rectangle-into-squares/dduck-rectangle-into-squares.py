# https://www.codewars.com/kata/55466989aeecab5aac00003e
# rectangle-into-squares

from unittest import TestCase


def sqInRect(a, b):
    result = []
    while a > 0:
        if b > a:
            a, b = b, a
        a -= b
        result.append(b)

    return result if len(result) > 1 else None


TestCase().assertEqual(sqInRect(5, 5), None)
TestCase().assertEqual(sqInRect(5, 3), [3, 2, 1, 1])
