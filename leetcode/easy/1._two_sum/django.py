"""
https://leetcode.com/problems/two-sum/
Runtime: 5912 ms, faster than 7.10% of Python3 online submissions for Two Sum.
Memory Usage: 13.5 MB, less than 99.30% of Python3 online submissions for Two Sum.
"""

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return None
