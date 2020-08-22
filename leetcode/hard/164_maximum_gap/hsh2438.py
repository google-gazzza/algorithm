"""
https://leetcode.com/problems/maximum-gap/
Runtime: 52 ms, faster than 86.92% of Python3 online submissions for Maximum Gap.
Memory Usage: 14.5 MB, less than 33.33% of Python3 online submissions for Maximum Gap.
"""


class Solution:
    def maximumGap(self, nums: List[int]) -> int:
        if len(nums) < 2:
            return 0
        
        nums.sort()
        
        maximum_gap = 0
        
        for i in range(len(nums)-1):
            gap = nums[i+1] - nums[i]
            if gap > maximum_gap:
                maximum_gap = gap
        
        return maximum_gap
