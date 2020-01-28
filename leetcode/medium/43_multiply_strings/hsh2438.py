"""
https://leetcode.com/problems/multiply-strings/
Runtime: 32 ms, faster than 77.93% of Python3 online submissions for Multiply Strings.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Multiply Strings.
"""


class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        return str(int(num1)*int(num2))
