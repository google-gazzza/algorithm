"""
reversing-words-in-a-string
codewars/8kyu/Reversing Words in a String
Difficulty:8kyu
URL: https://www.codewars.com/kata/57a55c8b72292d057b000594/
"""


def reverse(str):
    return ' '.join(str.split()[::-1])


def test_reverse():
    assert reverse('test 123') == '123 test'
    assert reverse('12 34') == '34 12'
