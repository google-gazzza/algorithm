# sum-of-a-sequence
# Sum of a sequence
# difficulty: 7kyu
# https://www.codewars.com/kata/586f6741c66d18c22800010a/
# approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/sum-of-a-sequence

def sequence_sum(begin, end, step):
    return sum([i for i in range(begin, end + 1, step)])


print(sequence_sum(2, 10, 2))

from unittest import TestCase

TestCase().assertEqual(sequence_sum(2, 6, 2), 12)
TestCase().assertEqual(sequence_sum(1, 5, 1), 15)
TestCase().assertEqual(sequence_sum(1, 5, 3), 5)
TestCase().assertEqual(sequence_sum(0, 15, 3), 45)
TestCase().assertEqual(sequence_sum(16, 15, 3), 0)
TestCase().assertEqual(sequence_sum(2, 24, 22), 26)
TestCase().assertEqual(sequence_sum(2, 2, 2), 2)
TestCase().assertEqual(sequence_sum(2, 2, 1), 2)
TestCase().assertEqual(sequence_sum(1, 15, 3), 35)
TestCase().assertEqual(sequence_sum(15, 1, 3), 0)
