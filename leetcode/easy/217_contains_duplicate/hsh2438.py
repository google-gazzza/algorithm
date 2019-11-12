"""
https://leetcode.com/problems/contains-duplicate
Runtime: 132 ms, faster than 97.83% of Python3 online submissions for Contains Duplicate.
Memory Usage: 18.1 MB, less than 88.68% of Python3 online submissions for Contains Duplicate.
"""


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return False if len(nums) == len(set(nums)) else True
