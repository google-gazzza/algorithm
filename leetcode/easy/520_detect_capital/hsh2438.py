"""
https://leetcode.com/problems/detect-capital/
Runtime: 36 ms, faster than 6.86% of Python3 online submissions for Detect Capital.
Memory Usage: 13.9 MB, less than 6.67% of Python3 online submissions for Detect Capital.
"""


class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        return word.isupper() or word.islower() or (word[0].isupper() and word[1:].islower())
