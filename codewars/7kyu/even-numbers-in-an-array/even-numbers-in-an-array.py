# even-numbers-in-an-array
# Even numbers in an array
# difficulty: 7kyu
# https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c

from unittest import TestCase


def even_numbers(arr, n):
    return list(filter(lambda e: e % 2 == 0, arr))[-n::]



TestCase().assertEqual(even_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
TestCase().assertEqual(even_numbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
TestCase().assertEqual(even_numbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
