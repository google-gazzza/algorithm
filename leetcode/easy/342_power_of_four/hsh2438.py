"""
https://leetcode.com/problems/power-of-four/
Runtime: 28 ms, faster than 74.86% of Python3 online submissions for Power of Four.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Power of Four.
"""


import math


class Solution:
    def isPowerOfFour(self, num: int) -> bool:
        if num < 1:
            return False
        log4 = math.log(num, 4)
        return log4 == int(log4)
