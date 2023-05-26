# pythagorean-triple
# Pythagorean Triple
# difficulty: 8kyu
# https://www.codewars.com/kata/5951d30ce99cf2467e000013

def pythagorean_triple(integers):
    [a, b, c] = list(map(lambda e: e ** 2, sorted(integers)))
    return a + b == c


from unittest import TestCase

TestCase().assertEqual(pythagorean_triple([3, 4, 5]), True)
TestCase().assertEqual(pythagorean_triple([3, 5, 9]), False)
