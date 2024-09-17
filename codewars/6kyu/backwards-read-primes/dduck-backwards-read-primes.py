# backwards-read-primes
# https://www.codewars.com/kata/5539fecef69c483c5a000015/

from unittest import TestCase

import math


def is_prime(num):
    if num < 2:
        return False

    root = int(math.sqrt(num))

    for i in range(2, root + 1):
        if num % i == 0:
            return False

    return True


def is_palindrome(num):
    return num == int(str(num)[::-1])


def backwards_prime(start, stop):
    result = []
    while start <= stop:
        if is_prime(start) and not is_palindrome(start) and is_prime(int(str(start)[::-1])):
            result.append(start)
        start += 1

    return result


TestCase().assertEqual(backwards_prime(2, 100), [13, 17, 31, 37, 71, 73, 79, 97])
TestCase().assertEqual(backwards_prime(9900, 10000), [9923, 9931, 9941, 9967])
