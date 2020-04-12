"""
https://leetcode.com/problems/valid-perfect-square/
Runtime: 40 ms, faster than 19.57% of Python3 online submissions for Valid Perfect Square.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Valid Perfect Square.
"""


class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if num == 1:
            return True
        
        for i in range(num):
            if i*i == num:
                return True
            elif i*i > num:
                return False
        
        return False
