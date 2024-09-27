"""
1967-number-of-strings-that-appear-as-substrings-in-word
leetcode/easy/1967. Number of Strings That Appear as Substrings in Word
Difficulty: easy
URL: https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/
"""

from typing import List


class Solution:
    def numOfStrings(self, patterns: List[str], word: str) -> int:
        return sum([1 for i in patterns if i in word])


def test():
    patterns = ["a", "abc", "bc", "d"]
    word = "abc"
    output = 3
    assert Solution().numOfStrings(patterns, word) == output

    patterns = ["a", "b", "c"]
    word = "aaaaabbbbb"
    output = 2
    assert Solution().numOfStrings(patterns, word) == output

    patterns = ["a", "a", "a"]
    word = "ab"
    output = 3
    assert Solution().numOfStrings(patterns, word) == output
