# longest-palindrome
# https://www.codewars.com/kata/54bb6f887e5a80180900046b

from unittest import TestCase


def get_longest_gap(s, leftIndex, rightIndex, max_gap):
    while leftIndex >= 0 and rightIndex < len(s) and s[leftIndex] == s[rightIndex]:
        leftIndex -= 1
        rightIndex += 1

    return max(max_gap, rightIndex - leftIndex - 1)


def longest_palindrome(s):
    index = 0
    max_gap = 0

    while index < len(s):
        max_gap = max(max_gap, get_longest_gap(s, index, index, max_gap), get_longest_gap(s, index, index + 1, max_gap))
        index += 1

    return max_gap


TestCase().assertEqual(longest_palindrome("a"), 1)
TestCase().assertEqual(longest_palindrome("aa"), 2)
TestCase().assertEqual(longest_palindrome("baa"), 2)
TestCase().assertEqual(longest_palindrome("aab"), 2)
TestCase().assertEqual(longest_palindrome("abcdefghba"), 1)
TestCase().assertEqual(longest_palindrome("baablkj12345432133d"), 9)
