# https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

from unittest import TestCase


def row_weights(array):
    sum = [0, 0]
    for i, x in enumerate(array):
        sum[i % 2] += x
    return tuple(sum)


TestCase().assertEqual(row_weights([80]), (80, 0))
TestCase().assertEqual(row_weights([100, 50]), (100, 50))
TestCase().assertEqual(row_weights([50, 60, 70, 80]), (120, 140))
TestCase().assertEqual(row_weights([13, 27, 49]), (62, 27))
TestCase().assertEqual(row_weights([70, 58, 75, 34, 91]), (236, 92))
TestCase().assertEqual(row_weights([29, 83, 67, 53, 19, 28, 96]), (211, 164))
TestCase().assertEqual(row_weights([0]), (0, 0))
TestCase().assertEqual(row_weights([100, 51, 50, 100]), (150, 151))
TestCase().assertEqual(row_weights([39, 84, 74, 18, 59, 72, 35, 61]), (207, 235))
TestCase().assertEqual(row_weights([0, 1, 0]), (0, 1))
