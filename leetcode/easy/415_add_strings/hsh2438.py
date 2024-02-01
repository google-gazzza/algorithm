"""
https://leetcode.com/problems/add-strings/
Runtime: 24 ms, faster than 98.92% of Python3 online submissions for Add Strings.
Memory Usage: 13 MB, less than 94.44% of Python3 online submissions for Add Strings.
"""


class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        return str(int(num1) + int(num2))
