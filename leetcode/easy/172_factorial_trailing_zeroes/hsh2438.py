"""
https://leetcode.com/problems/factorial-trailing-zeroes/
Runtime: 68 ms, faster than 5.51% of Python3 online submissions for Factorial Trailing Zeroes.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Factorial Trailing Zeroes.
"""


class Solution:
    def trailingZeroes(self, n: int) -> int:
        count = 0
        while n > 0:
            count += int(n / 5)
            n = n / 5

        return count