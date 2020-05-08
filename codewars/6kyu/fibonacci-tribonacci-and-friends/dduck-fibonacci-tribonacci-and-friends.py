# fibonacci-tribonacci-and-friends
# https://www.codewars.com/kata/556e0fccc392c527f20000c5/train/javascript
from unittest import TestCase


def Xbonacci(signature, n):
    index = 0
    while len(signature) < n:
        signature.append(sum(signature[index:n:]))
        index += 1
    return signature[0:n]


TestCase().assertEqual(Xbonacci([0, 1], 10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
TestCase().assertEqual(Xbonacci([1, 1], 10), [1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
TestCase().assertEqual(Xbonacci([0, 0, 0, 0, 1], 10), [0, 0, 0, 0, 1, 1, 2, 4, 8, 16])
TestCase().assertEqual(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10), [1, 0, 0, 0, 0, 0, 1, 2, 3, 6])
TestCase().assertEqual(Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20),
                       [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256])
