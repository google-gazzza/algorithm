# Checking Groups
# https://www.codewars.com/kata/54b80308488cb6cd31000161/

from unittest import TestCase

import re

regexp = r"\(\)|{}|\[\]"


def group_check(s):
    if re.search(regexp, s):
        return group_check(re.sub(regexp, '', s))
    return len(s) == 0


TestCase().assertEqual(group_check("()"), True)
TestCase().assertEqual(group_check("({"), False)
TestCase().assertEqual(group_check("()"), True)
TestCase().assertEqual(group_check("{(})"), False)
TestCase().assertEqual(group_check("[])"), False)
TestCase().assertEqual(group_check("()[]{}"), True)
TestCase().assertEqual(group_check("[[]()]"), True)
