# https://www.codewars.com/kata/5bd776533a7e2720c40000e5

from unittest import TestCase

from collections import deque


def pendulum(values):
    result = deque([])
    sorted_values = sorted(values)
    sorted_values.reverse()

    while (sorted_values):
        result.appendleft(sorted_values.pop())
        if sorted_values:
            result.append(sorted_values.pop())

    return list(result)


# BestPractice in codewars
#
# def pendulum(a):
#     a = sorted(a)
#     return a[::2][::-1] + a[1::2]


TestCase().assertEqual(pendulum([4, 6, 8, 7, 5]), [8, 6, 4, 5, 7])
TestCase().assertEqual(pendulum([19, 30, 16, 19, 28, 26, 28, 17, 21, 17]), [28, 26, 19, 17, 16, 17, 19, 21, 28, 30])
TestCase().assertEqual(pendulum([-9, -2, -10, -6]), [-6, -10, -9, -2])
TestCase().assertEqual(pendulum([-19, -9, -5, -6, -15, -16, -5, -12]), [-5, -9, -15, -19, -16, -12, -6, -5])
TestCase().assertEqual(pendulum([11, -16, -18, 13, -11, -12, 3, 18]), [13, 3, -12, -18, -16, -11, 11, 18])
