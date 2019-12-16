"""
https://leetcode.com/problems/house-robber/
Runtime: 32 ms, faster than 74.84% of Python3 online submissions for House Robber.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for House Robber.
"""


class Solution:
    def rob(self, nums: List[int]) -> int:
        dp = [0, 0]
        for i in range(len(nums)):
            dp.append(max(dp[-1], dp[-2] + nums[i]))

        return dp[-1]
