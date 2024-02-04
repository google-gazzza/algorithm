"""
https://leetcode.com/problems/sum-of-square-numbers/
Runtime: 216 ms, faster than 64.14% of Python3 online submissions for Sum of Square Numbers.
Memory Usage: 13.9 MB, less than 50.00% of Python3 online submissions for Sum of Square Numbers.
"""


import math


class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        for a in range(int(math.sqrt(c))+1):
            bb = c - a*a
            b = math.sqrt(bb)
            if bb == int(b) * int(b):
                return True
        return False
