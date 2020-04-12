# https://www.codewars.com/kata/5a4e3782880385ba68000018

from unittest import TestCase


def balanced_num(number):
    digits = [int(x) for x in str(number)]
    half_len = int((len(digits) - 2) / 2 if len(digits) % 2 == 0 else (len(digits) - 1) / 2)
    left_sum = sum(digits[:half_len])
    right_sum = sum(digits[-half_len:])

    if half_len == 0 or left_sum == right_sum:
        return "Balanced"
    return "Not Balanced"


TestCase().assertEqual(balanced_num(7), "Balanced");
TestCase().assertEqual(balanced_num(959), "Balanced");
TestCase().assertEqual(balanced_num(13), "Balanced");
TestCase().assertEqual(balanced_num(432), "Not Balanced");
TestCase().assertEqual(balanced_num(424), "Balanced");
TestCase().assertEqual(balanced_num(1024), "Not Balanced")
TestCase().assertEqual(balanced_num(66545), "Not Balanced")
TestCase().assertEqual(balanced_num(295591), "Not Balanced")
TestCase().assertEqual(balanced_num(1230987), "Not Balanced")
TestCase().assertEqual(balanced_num(56239814), "Balanced")
