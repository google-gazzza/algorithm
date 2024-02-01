# is-a-number-prime
# https://www.codewars.com/kata/5262119038c0985a5b00029f/javascript

from unittest import TestCase

import math


def is_prime(num):
    if num < 2:
        return False

    root = math.sqrt(num)
    i = 2
    while i <= root:
        if num % i == 0:
            return False
        i += 1
    return True

# it's referenced https://www.quora.com/Whats-the-best-algorithm-to-check-if-a-number-is-prime



TestCase().assertEqual(is_prime(0), False, "0  is not prime")
TestCase().assertEqual(is_prime(1), False, "1  is not prime")
TestCase().assertEqual(is_prime(2), True, "2  is prime")
TestCase().assertEqual(is_prime(73), True, "73 is prime")
TestCase().assertEqual(is_prime(75), False, "75 is not prime")
TestCase().assertEqual(is_prime(-1), False, "-1 is not prime")

TestCase().assertEqual(is_prime(3), True, "3  is prime");
TestCase().assertEqual(is_prime(5), True, "5  is prime");
TestCase().assertEqual(is_prime(7), True, "7  is prime");
TestCase().assertEqual(is_prime(41), True, "41 is prime");
TestCase().assertEqual(is_prime(5099), True, "5099 is prime");

TestCase().assertEqual(is_prime(4), False, "4  is not prime");
TestCase().assertEqual(is_prime(6), False, "6  is not prime");
TestCase().assertEqual(is_prime(8), False, "8  is not prime");
TestCase().assertEqual(is_prime(9), False, "9 is not prime");
TestCase().assertEqual(is_prime(45), False, "45 is not prime");
TestCase().assertEqual(is_prime(-5), False, "-5 is not prime");
TestCase().assertEqual(is_prime(-8), False, "-8 is not prime");
TestCase().assertEqual(is_prime(-41), False, "-41 is not prime");
