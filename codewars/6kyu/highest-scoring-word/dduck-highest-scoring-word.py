# highest-scoring-word
# https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

from unittest import TestCase

from functools import reduce


def high(x):
    sorted_value = sorted([
        (word, reduce(lambda a, b: a + ord(b) - 96, list(word), 0))
        for word in x.split(" ")
    ], key=lambda v: v[1])

    return list(filter(lambda v: v[1] == sorted_value[-1][1], sorted_value))[0][0]


TestCase().assertEqual(high('man i need a taxi up to ubud'), 'taxi')
TestCase().assertEqual(high('what time are we climbing up the volcano'), 'volcano')
TestCase().assertEqual(high('take me to semynak'), 'semynak')
