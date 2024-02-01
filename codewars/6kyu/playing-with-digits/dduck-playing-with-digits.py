# Playing with digits
# https://www.codewars.com/kata/5552101f47fc5178b1000050


from unittest import TestCase


def dig_pow(n, p):
    result = sum(map(lambda v: int(v[1]) ** (p + v[0]), enumerate(str(n))))
    return int(result / n) if result % n == 0 else -1


TestCase().assertEqual(dig_pow(89, 1), 1)
TestCase().assertEqual(dig_pow(92, 1), -1)
TestCase().assertEqual(dig_pow(46288, 3), 51)
