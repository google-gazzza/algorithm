"""
https://leetcode.com/problems/third-maximum-number/
Runtime: 52 ms, faster than 70.25% of Python3 online submissions for Third Maximum Number.
Memory Usage: 15.3 MB, less than 7.69% of Python3 online submissions for Third Maximum Number.
"""


class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        nums = list(set(nums))
        
        first = -float('inf')
        second = -float('inf')
        third = -float('inf')
        
        if len(nums) < 3:
            return max(nums)
        
        for i in range(len(nums)):
            if nums[i] > first:
                third = second
                second = first
                first = nums[i]
            elif nums[i] > second:
                third = second
                second = nums[i]
            elif nums[i] > third:
                third = nums[i]

        return third
