# https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7/

from unittest import TestCase


def squares_needed(grains, unit=1, step=0):
    return step if grains < 1 else squares_needed(grains - unit, unit * 2, step + 1)


TestCase().assertEqual(squares_needed(0), 0)
TestCase().assertEqual(squares_needed(1), 1)
TestCase().assertEqual(squares_needed(2), 2)
TestCase().assertEqual(squares_needed(3), 2)
TestCase().assertEqual(squares_needed(4), 3)

"""
best practice in codewars
written by [Unnamed, suic, monochromeninja, CopperWye, MercenaryChaos]
===============================

squares_needed = int.bit_length

"""
