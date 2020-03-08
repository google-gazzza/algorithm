"""
https://leetcode.com/problems/length-of-last-word/
Runtime: 36 ms, faster than 7.86% of Python3 online submissions for Length of Last Word.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Length of Last Word.
"""


class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(s.split()[-1]) if len(s.split()) > 0 else 0
