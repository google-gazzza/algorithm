"""
https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
Runtime: 112 ms, faster than 76.86% of Python3 online submissions for Minimum Number of Steps to Make Two Strings Anagram.
Memory Usage: 13.4 MB, less than 100.00% of Python3 online submissions for Minimum Number of Steps to Make Two Strings Anagram.
"""


from collections import Counter


class Solution:
    def minSteps(self, s: str, t: str) -> int:
        return sum((Counter(s)-Counter(t)).values())
