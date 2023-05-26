# number-of-decimal-digits
# Number of Decimal Digits
# difficulty: 7kyu
# https://www.codewars.com/kata/58fa273ca6d84c158e000052

def digits(n):
    return len(str(n))


from unittest import TestCase

TestCase().assertEqual(digits(5), 1)
TestCase().assertEqual(digits(12345), 5)
TestCase().assertEqual(digits(9876543210), 10)
