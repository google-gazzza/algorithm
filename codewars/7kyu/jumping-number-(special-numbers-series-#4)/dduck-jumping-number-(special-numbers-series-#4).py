# https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/train/javascript

from unittest import TestCase

import math


def jumping_number(number):
    digits = list(map(int, str(number)))

    for x in list(zip(digits, digits[1:])):
        if math.fabs(x[0] - x[1]) != 1:
            return "Not!!"

    return "Jumping!!"


TestCase().assertEqual(jumping_number(1), "Jumping!!")
TestCase().assertEqual(jumping_number(7), "Jumping!!")
TestCase().assertEqual(jumping_number(9), "Jumping!!")
TestCase().assertEqual(jumping_number(23), "Jumping!!")
TestCase().assertEqual(jumping_number(32), "Jumping!!")
TestCase().assertEqual(jumping_number(79), "Not!!")
TestCase().assertEqual(jumping_number(98), "Jumping!!")
TestCase().assertEqual(jumping_number(8987), "Jumping!!")
TestCase().assertEqual(jumping_number(4343456), "Jumping!!")
TestCase().assertEqual(jumping_number(98789876), "Jumping!!")
