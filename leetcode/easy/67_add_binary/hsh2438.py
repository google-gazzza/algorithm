"""
https://leetcode.com/problems/add-binary/
Runtime: 28 ms, faster than 83.28% of Python3 online submissions for Add Binary.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Add Binary.
"""


class Solution:
    def addBinary(self, a: str, b: str) -> str:
        return '{0:b}'.format(int(a, 2) + int(b, 2))
