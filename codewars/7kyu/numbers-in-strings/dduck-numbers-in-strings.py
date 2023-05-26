# numbers-in-strings
# Numbers in strings
# difficulty: 7kyu
# https://www.codewars.com/kata/59dd2c38f703c4ae5e000014

import re


def solve(s):
    return max(list(map(int, re.findall("\d+", s))))


from unittest import TestCase

TestCase().assertEqual(solve('gh12cdy695m1'), 695)
TestCase().assertEqual(solve('2ti9iei7qhr5'), 9)
TestCase().assertEqual(solve('vih61w8oohj5'), 61)
TestCase().assertEqual(solve('f7g42g16hcu5'), 42)
TestCase().assertEqual(solve('lu1j8qbbb85'), 85)
