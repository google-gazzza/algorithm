"""https://leetcode.com/problems/factorial-trailing-zeroes/

Runtime: 36 ms, faster than 13.12% of Python online submissions for Factorial Trailing Zeroes.
Memory Usage: 11.9 MB, less than 5.88% of Python online submissions for Factorial Trailing Zeroes.
"""
class Solution(object):
    def trailingZeroes(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n >= 5: return self.trailingZeroes(n/5) + n/5
        else: return 0
