# bit-counting
# https://www.codewars.com/kata/526571aae218b8ee490006f4

from unittest import TestCase

countBits = lambda n: len(list(filter(lambda x: x == "1", list(bin(n)))))

TestCase().assertEqual(countBits(0), 0);
TestCase().assertEqual(countBits(4), 1);
TestCase().assertEqual(countBits(7), 3);
TestCase().assertEqual(countBits(9), 2);
TestCase().assertEqual(countBits(10), 2);

# best practice in codewars
# def countBits(n):
#     return bin(n).count("1")
