# https://www.codewars.com/kata/5a4d303f880385399b000001/

from unittest import TestCase

import math


def strong_num(number):
    if number == sum([math.factorial(int(x)) for x in str(number)][::-1]):
        return "STRONG!!!!"
    return "Not Strong !!"


TestCase().assertEqual(strong_num(1), "STRONG!!!!")
TestCase().assertEqual(strong_num(2), "STRONG!!!!")
TestCase().assertEqual(strong_num(145), "STRONG!!!!")
TestCase().assertEqual(strong_num(7), "Not Strong !!")
TestCase().assertEqual(strong_num(93), "Not Strong !!")
TestCase().assertEqual(strong_num(185), "Not Strong !!")
