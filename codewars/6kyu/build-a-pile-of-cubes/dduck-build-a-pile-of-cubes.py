# build-a-pile-of-cubes
# https://www.codewars.com/kata/5592e3bd57b64d00f3000047

from unittest import TestCase


def find_nb(m):
    n = 1
    nsum = 0
    sum = 0

    while m > sum:
        sum += n ** 3
        nsum += n
        n += 1

    return n - 1 if m == sum else -1


TestCase().assertEqual(find_nb(4183059834009), 2022)
TestCase().assertEqual(find_nb(24723578342962), -1)
TestCase().assertEqual(find_nb(135440716410000), 4824)
TestCase().assertEqual(find_nb(40539911473216), 3568)
TestCase().assertEqual(find_nb(26825883955641), 3218)
