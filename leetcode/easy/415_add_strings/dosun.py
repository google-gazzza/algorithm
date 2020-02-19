"""https://leetcode.com/problems/add-strings/

Runtime: 28 ms, faster than 96.56% of Python3 online submissions for Add Strings.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Add Strings.
"""
class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        return str(int(num1) + int(num2))
