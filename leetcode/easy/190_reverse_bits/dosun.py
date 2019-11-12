"""https://leetcode.com/problems/reverse-bits/

Runtime: 8 ms, faster than 98.92% of Python online submissions for Reverse Bits.
Memory Usage: 11.8 MB, less than 21.43% of Python online submissions for Reverse Bits.
"""
class Solution:
    # @param n, an integer
    # @return an integer
    def reverseBits(self, n):
        return int('{0:032b}'.format(n)[::-1], 2)
