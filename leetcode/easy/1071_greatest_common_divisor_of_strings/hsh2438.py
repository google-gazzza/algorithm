"""
https://leetcode.com/problems/greatest-common-divisor-of-strings/
Runtime: 36 ms, faster than 33.95% of Python3 online submissions for Greatest Common Divisor of Strings.
Memory Usage: 14.1 MB, less than 100.00% of Python3 online submissions for Greatest Common Divisor of Strings.
"""


class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        if len(str1) > len(str2):
            longer = str1
            shorter = str2
        else:
            longer = str2
            shorter = str1

        result = ''
        for i in range(1, len(shorter)+1):
            cd = shorter[:i]
            if longer == int(len(longer) / i) * cd and shorter == int(len(shorter) / i) * cd:
                result = cd

        return result
