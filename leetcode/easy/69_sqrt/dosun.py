"""https://leetcode.com/problems/sqrtx/

Runtime: 40 ms, faster than 81.72% of Python3 online submissions for Sqrt(x).
Memory Usage: 13.8 MB, less than 6.45% of Python3 online submissions for Sqrt(x).
"""

class Solution:
    def mySqrt(self, x: int) -> int:
        return int(x**(1/2))
