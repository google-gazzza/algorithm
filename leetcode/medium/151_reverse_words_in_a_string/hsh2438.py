"""
https://leetcode.com/problems/reverse-words-in-a-string/
Runtime: 24 ms, faster than 89.74% of Python3 online submissions for Reverse Words in a String.
Memory Usage: 13.2 MB, less than 100.00% of Python3 online submissions for Reverse Words in a String.
"""


class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join(s.split()[::-1])
