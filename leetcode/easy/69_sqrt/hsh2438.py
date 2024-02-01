"""
https://leetcode.com/problems/sqrtx/
Runtime: 32 ms, faster than 76.65% of Python3 online submissions for Sqrt(x).
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Sqrt(x).
"""


import math


class Solution:
    def mySqrt(self, x: int) -> int:
        return math.trunc(math.sqrt(x))
