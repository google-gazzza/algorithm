# https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/

from unittest import TestCase


def disarium_number(number):
    if number == sum([int(v) ** (i + 1) for i, v in enumerate(str(number))]):
        return "Disarium !!"
    return "Not !!"


TestCase().assertEqual(disarium_number(89), "Disarium !!")
TestCase().assertEqual(disarium_number(518), "Disarium !!")
TestCase().assertEqual(disarium_number(1024), "Not !!")
