"""
https://leetcode.com/problems/add-binary/

Runtime: 36 ms, faster than 90.55% of Python3 online submissions for Add Binary.
Memory Usage: 13.8 MB, less than 5.41% of Python3 online submissions for Add Binary.
"""

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        return bin(int(a, 2) + int(b, 2))[2:]
        
