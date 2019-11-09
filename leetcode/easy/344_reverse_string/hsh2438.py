"""
https://leetcode.com/problems/reverse-string/
Runtime: 216 ms, faster than 99.31% of Python3 online submissions for Reverse String.
Memory Usage: 17.3 MB, less than 97.67% of Python3 online submissions for Reverse String.
"""


class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        for i in range(len(s) // 2):
            s[i], s[-(i + 1)] = s[-(i + 1)], s[i]
