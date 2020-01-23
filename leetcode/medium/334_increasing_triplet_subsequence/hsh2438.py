"""
https://leetcode.com/problems/increasing-triplet-subsequence/
Runtime: 60 ms, faster than 57.83% of Python3 online submissions for Increasing Triplet Subsequence.
Memory Usage: 13.4 MB, less than 88.89% of Python3 online submissions for Increasing Triplet Subsequence.
"""


class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        if len(nums) < 3:
            return False
        
        curMin = nums[0]
        curSec = float('inf')
        for i in range(1, len(nums)):
            if nums[i] < curMin:
                curMin = nums[i]
            elif curMin < nums[i] < curSec:
                curSec = nums[i]
            elif nums[i] > curSec:
                return True
        return False
