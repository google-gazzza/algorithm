"""
Difficulty: 
URL:
"""

"""
sum-of-integers-in-string
codewars/7kyu/Sum of integers in string
Difficulty: 7kyu
URL: https://www.codewars.com/kata/598f76a44f613e0e0b000026/
"""

import re
import functools


def sum_of_integers_in_string(s):
    return functools.reduce(lambda a, b: int(a) + int(b), [*re.findall(r'\d+', s), 0])


# Best Practice
import re


def sum_of_integers_in_string(s):
    return sum(map(int, re.findall("\d+", s)))


def test_sum_of_integers_in_string():
    exampleTests = (
        ("12.4", 16),
        ("h3ll0w0rld", 3),
        ("2 + 3 = ", 5),
        ("Our company made approximately 1 million in gross revenue last quarter.", 1),
        ("The Great Depression lasted from 1929 to 1939.", 3868),
        ("Dogs are our best friends.", 0),
        ("C4t5 are 4m4z1ng.", 18),
        ("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 3635)
    )
    for testString, correctAnswer in exampleTests:
        assert sum_of_integers_in_string(testString) == correctAnswer
