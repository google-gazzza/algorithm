"""
https://leetcode.com/problems/contains-duplicate/
Runtime: 120 ms, faster than 93.64% of Python3 online submissions for Contains Duplicate.
Memory Usage: 18 MB, less than 88.68% of Python3 online submissions for Contains Duplicate.
"""

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        if nums is None:
            return False

        setnums = set(nums)

        if len(setnums) != len(nums):
            return True
        else:
            return False



