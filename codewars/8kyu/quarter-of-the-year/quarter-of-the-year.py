# quarter-of-the-year.py
# codewars/8kyu/Quarter of the year
# Difficulty: 8kyu
# URL: https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/solutions/python

import math


def quarter_of(month):
    return math.ceil(month / 3)


# Clever
def quarter_of(month):
    return (month + 2) // 3


def test_quarter_of():
    assert quarter_of(3) == 1
    assert quarter_of(8) == 3
    assert quarter_of(11) == 4
