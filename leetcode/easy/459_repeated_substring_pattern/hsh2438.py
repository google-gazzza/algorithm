"""
https://leetcode.com/problems/repeated-substring-pattern/
Runtime: 132 ms, faster than 34.16% of Python3 online submissions for Repeated Substring Pattern.
Memory Usage: 14 MB, less than 7.14% of Python3 online submissions for Repeated Substring Pattern.
"""


class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        
        for i in range(1, int(len(s)/2)+1):
            if s == s[:i] * int(len(s)/i):
                return True

        return False
