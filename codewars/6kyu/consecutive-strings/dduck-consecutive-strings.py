# consecutive-strings
# https://www.codewars.com/kata/56a5d994ac971f1ac500003e

from unittest import TestCase


def longest_consec(strarr, k):
    longest_consec_index = 0
    longest_length = 0

    for i in range(len(strarr)):
        length = len("".join(strarr[i:i + k]))

        if length > longest_length:
            longest_consec_index = i
            longest_length = length

    if len(strarr) == 0 or k > len(strarr) or k <= 0:
        return ""

    return "".join(strarr[longest_consec_index:longest_consec_index + k])


TestCase().assertEqual(longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
TestCase().assertEqual(
    longest_consec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1),
    "oocccffuucccjjjkkkjyyyeehh")
TestCase().assertEqual(longest_consec([], 3), "")
TestCase().assertEqual(
    longest_consec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2),
    "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
TestCase().assertEqual(longest_consec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2),
                       "wlwsasphmxxowiaxujylentrklctozmymu")
TestCase().assertEqual(longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
TestCase().assertEqual(longest_consec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
TestCase().assertEqual(longest_consec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
TestCase().assertEqual(longest_consec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
