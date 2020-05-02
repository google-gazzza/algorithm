# a-rule-of-divisibility-by-13
# https://www.codewars.com/kata/564057bc348c7200bd0000ff/

from unittest import TestCase


def thirt(n):
    result = sum([(10 ** int(v[0]) % 13) * int(v[1]) for v in enumerate(list(str(n))[::-1])])
    return result if n == result else thirt(result)

TestCase().assertEqual(thirt(1234567), 87)
TestCase().assertEqual(thirt(8529), 79)
TestCase().assertEqual(thirt(85299258), 31)
TestCase().assertEqual(thirt(5634), 57)
TestCase().assertEqual(thirt(1111111111), 71)
TestCase().assertEqual(thirt(987654321), 30)
