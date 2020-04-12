# find-the-missing-letter
# https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

from unittest import TestCase


def find_missing_letter(chars):
    prev = chars[0]

    for i in range(1, len(chars)):
        if ord(prev) + 1 != ord(chars[i]):
            return chr(ord(prev) + 1)
        prev = chars[i]


TestCase().assertEqual(find_missing_letter(['a', 'b', 'c', 'd', 'f']), 'e')
TestCase().assertEqual(find_missing_letter(['O', 'Q', 'R', 'S']), 'P')
