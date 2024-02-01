# tortoise-racing
# https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript

from unittest import TestCase

import math


def race(v1, v2, g):
    if v1 >= v2:
        return None

    time = g / (v2 - v1)
    return [math.floor(time), math.floor(time * 60 % 60), math.floor(time * 3600 % 60)]


TestCase().assertEqual(race(720, 850, 70), [0, 32, 18])
TestCase().assertEqual(race(80, 91, 37), [3, 21, 49])
TestCase().assertEqual(race(80, 100, 40), [2, 0, 0])
