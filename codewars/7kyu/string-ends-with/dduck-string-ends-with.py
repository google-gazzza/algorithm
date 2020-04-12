# https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

from unittest import TestCase

solution = lambda str, ending: str.endswith(ending)

TestCase().assertEqual(solution('abcde', 'cde'), True)
TestCase().assertEqual(solution('abcde', 'abc'), False)
TestCase().assertEqual(solution('abcde', ''), True)
