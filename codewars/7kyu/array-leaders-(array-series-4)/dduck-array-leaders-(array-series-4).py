# https://www.codewars.com/kata/5a7893ef0025e9eb50000013/

from unittest import TestCase


def max_gap(numbers):
    sorted_numbers = sorted(numbers)
    max = 0
    for i, v in list(enumerate(sorted_numbers)):
        if sorted_numbers[i] - sorted_numbers[i - 1] > max:
            max = sorted_numbers[i] - sorted_numbers[i - 1]

    return max


TestCase().assertEqual(max_gap([13, 10, 2, 9, 5]), 4)
TestCase().assertEqual(max_gap([13, 3, 5]), 8)
TestCase().assertEqual(max_gap([24, 299, 131, 14, 26, 25]), 168)
TestCase().assertEqual(max_gap([-3, -27, -4, -2]), 23)
TestCase().assertEqual(max_gap([-7, -42, -809, -14, -12]), 767)
TestCase().assertEqual(max_gap([12, -5, -7, 0, 290]), 278)
TestCase().assertEqual(max_gap([-54, 37, 0, 64, -15, 640, 0]), 576)
TestCase().assertEqual(max_gap([130, 30, 50]), 80)
TestCase().assertEqual(max_gap([1, 1, 1]), 0)
TestCase().assertEqual(max_gap([-1, -1, -1]), 0)
