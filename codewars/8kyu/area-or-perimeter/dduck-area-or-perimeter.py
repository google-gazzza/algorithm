# https://www.codewars.com/kata/5ab6538b379d20ad880000ab

from unittest import TestCase


def area_or_perimeter(l, w):
    if l == w:
        return l ** 2
    return (l + w) * 2


TestCase().assertEqual(area_or_perimeter(4, 4), 16)
TestCase().assertEqual(area_or_perimeter(6, 10), 32)
