twice-linear# twice-linear
# https://www.codewars.com/kata/5672682212c8ecf83e000050

from unittest import TestCase


def dbl_linear(n):
    u = [1]
    pt2 = 0
    pt3 = 0
    i = 1

    while i <= n:
        u.append(min(2 * u[pt2] + 1, 3 * u[pt3] + 1))
        if u[i] == 2 * u[pt2] + 1:
            pt2 += 1
        if u[i] == 3 * u[pt3] + 1:
            pt3 += 1
        i += 1

    return u[n]


# it's imitation of JavaScript best practice


TestCase().assertEqual(dbl_linear(10), 22)
TestCase().assertEqual(dbl_linear(20), 57)
TestCase().assertEqual(dbl_linear(30), 91)
TestCase().assertEqual(dbl_linear(50), 175)
