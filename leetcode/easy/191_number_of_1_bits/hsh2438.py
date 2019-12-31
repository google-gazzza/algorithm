"""
https://leetcode.com/problems/number-of-1-bits/
Runtime: 28 ms, faster than 71.60% of Python3 online submissions for Number of 1 Bits.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Number of 1 Bits.
"""


class Solution:
    def hammingWeight(self, n: int) -> int:
        return sum(list(map(int, '{0:b}'.format(n))))
