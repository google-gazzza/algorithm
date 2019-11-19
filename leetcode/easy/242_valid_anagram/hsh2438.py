"""
https://leetcode.com/problems/valid-anagram/
Runtime: 36 ms, faster than 98.45% of Python3 online submissions for Valid Anagram.
Memory Usage: 13.1 MB, less than 96.88% of Python3 online submissions for Valid Anagram.
"""

from collections import Counter


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)
