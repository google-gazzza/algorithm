# https://www.codewars.com/kata/550498447451fbbd7600041c

from unittest import TestCase

from itertools import takewhile


def comp(array1, array2):
    if array1 is None or array2 is None:
        return False

    array1 = sorted(map(lambda x: x ** 2, array1))
    array2 = sorted(array2)
    return len(array2) == sum(1 for _ in takewhile(lambda x: x[0] == x[1], list(zip(array1, array2))))


a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]
TestCase().assertEqual(comp(a1, a2), True)

a3 = [-121, -144, 19, -161, 19, -144, 19, -11]
a4 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
TestCase().assertEqual(comp(a3, a4), True)
