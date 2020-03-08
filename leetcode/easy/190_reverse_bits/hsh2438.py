"""
https://leetcode.com/problems/reverse-bits/
Runtime: 32 ms, faster than 50.00% of Python3 online submissions for Reverse Bits.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Reverse Bits.
"""


class Solution:
    def reverseBits(self, n: int) -> int:
        return int('{0:b}'.format(n).zfill(32)[::-1], 2)
