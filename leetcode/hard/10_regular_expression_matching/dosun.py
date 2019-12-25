"""https://leetcode.com/problems/regular-expression-matching/

Runtime: 60 ms, faster than 53.40% of Python3 online submissions for Regular Expression Matching.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Regular Expression Matching.
"""
import re

class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        if re.findall('^' + p + '$', s): return True
        return False
