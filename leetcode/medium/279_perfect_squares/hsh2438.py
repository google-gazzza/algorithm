"""
https://leetcode.com/problems/perfect-squares/
Runtime: 248 ms, faster than 66.07% of Python3 online submissions for Perfect Squares.
Memory Usage: 19.3 MB, less than 30.00% of Python3 online submissions for Perfect Squares.
"""


import math


class Solution:
    def numSquares(self, n: int) -> int:
        if n == 0:
            return 0
        
        squares = [idx*idx for idx in range(1, int(math.sqrt(n))+1)]

        count = 0
        dp = [[n]]
        while True:
            new_dp = []
            for case in dp[-1]:
                for square in squares[::-1]:
                    temp = case-square
                    if temp == 0:
                        return count+1
                    elif temp > 0:
                        new_dp.append(temp)
            dp.append(set(new_dp))
            count += 1
