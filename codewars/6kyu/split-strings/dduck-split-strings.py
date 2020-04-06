# split-strings
# https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

from unittest import TestCase


def solution(s):
    string = s + "_" if len(s) % 2 == 1 else s
    return [string[i:i + 2] for i in range(0, len(string), 2)]


tests = (
    ("asdfadsf", ['as', 'df', 'ad', 'sf']),
    ("asdfads", ['as', 'df', 'ad', 's_']),
    ("", []),
    ("x", ["x_"]),
)

for inp, exp in tests:
    TestCase().assertEqual(solution(inp), exp)
