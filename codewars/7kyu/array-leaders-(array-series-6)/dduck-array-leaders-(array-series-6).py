# https://www.codewars.com/kata/5a905c2157c562994900009d

from unittest import TestCase


def minimum_steps(numbers, value):
    sum = 0
    for i, x in enumerate(sorted(numbers)):
        sum += x
        if sum >= value:
            return i
    return -1


TestCase().assertEqual(minimum_steps([4, 6, 3], 7), 1)
TestCase().assertEqual(minimum_steps([10, 9, 9, 8], 17), 1)
TestCase().assertEqual(minimum_steps([8, 9, 10, 4, 2], 23), 3)
TestCase().assertEqual(minimum_steps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), 8)
TestCase().assertEqual(minimum_steps([4, 6, 3], 2), 0)
