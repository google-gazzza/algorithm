# https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript

from unittest import TestCase


def tidyNumber(n):
    digits = str(n)
    return len(digits) - 1 == sum([True for i in range(0, len(digits) - 1) if int(digits[i]) <= int(digits[i + 1])])

#
def extra_perfect(n):
    return list(range(1,n+1,2))
#

TestCase().assertEqual(tidyNumber(12), True)
TestCase().assertEqual(tidyNumber(102), False)
TestCase().assertEqual(tidyNumber(9672), False)
TestCase().assertEqual(tidyNumber(2789), True)
