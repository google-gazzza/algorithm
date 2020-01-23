"""
https://leetcode.com/problems/single-number/
Runtime: 88 ms, faster than 81.10% of Python3 online submissions for Single Number.
Memory Usage: 15.3 MB, less than 8.20% of Python3 online submissions for Single Number.
"""

class Solution:
    def singleNumber(self, nums: List[int]) -> int:

        nums.sort()

        for i in range(len(nums) - 2):
            if nums[i] != nums[i+1]:
                if i == 0:
                    return nums[i]
                elif nums[i+1] != nums[i+2]:
                    return nums[i+1]

        return nums[-1]

