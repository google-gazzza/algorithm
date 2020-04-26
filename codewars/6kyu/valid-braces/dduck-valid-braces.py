# Valid Braces
# https://www.codewars.com/kata/5277c8a221e209d3f6000b56

from unittest import TestCase

import re

braces_detect_regexp = r'\(\)|\[\]|\{\}'


def validBraces(string):
    if re.search(braces_detect_regexp, string):
        return validBraces(re.sub(braces_detect_regexp, '', string))
    return len(string) == 0


TestCase().assertEqual(validBraces("(){}[]"), True)
TestCase().assertEqual(validBraces("([{}])"), True)
TestCase().assertEqual(validBraces("(}"), False)
TestCase().assertEqual(validBraces("[(])"), False)
TestCase().assertEqual(validBraces("[({})](]"), False)
