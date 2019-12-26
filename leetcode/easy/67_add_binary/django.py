"""
https://leetcode.com/problems/add-binary/submissions/
Runtime: 24 ms, faster than 98.24% of Python3 online submissions for Add Binary.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Add Binary.
"""

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        return bin(int(a, 2) + int(b, 2))[2:]

