"""
fixme-replace-all-dots
codewars/8kyu/FIXME: Replace all dots
Difficulty: 8kyu
URL: https://www.codewars.com/kata/596c6eb85b0f515834000049
"""


def replace_dots(str):
    return str.replace('.', '-')


import re


def replace_dots(str):
    return re.sub(r"\.", "-", str)


def test_replace_dots():
    assert replace_dots("") == ""
    assert replace_dots("no dots") == "no dots"
    assert replace_dots("one.two.three") == "one-two-three"
    assert replace_dots("........") == "--------"
