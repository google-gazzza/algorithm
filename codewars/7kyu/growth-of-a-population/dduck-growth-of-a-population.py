# https://www.codewars.com/kata/563b662a59afc2b5120000c6

from unittest import TestCase


def nb_year(p0, percent, aug, p, count=1):
    result = p0 + (p0 * (percent / 100)) + aug
    return count if result >= p else nb_year(result, percent, aug, p, count + 1)


TestCase().assertEqual(nb_year(1500, 5, 100, 5000), 15)
TestCase().assertEqual(nb_year(1500000, 2.5, 10000, 2000000), 10)
TestCase().assertEqual(nb_year(1500000, 0.25, 1000, 2000000), 94)
