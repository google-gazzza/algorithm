"""
https://leetcode.com/problems/min-cost-climbing-stairs/
Runtime: 56 ms, faster than 76.63% of Python3 online submissions for Min Cost Climbing Stairs.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Min Cost Climbing Stairs.
"""


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        
        c0, c1 = cost[0], cost[1]
        for i in range(2,len(cost)):
            tmp = cost[i] + min(c0, c1)
            c0 = c1
            c1 = tmp
        return min(c0, c1)
