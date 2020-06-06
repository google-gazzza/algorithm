"""
https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
Runtime: 352 ms, faster than 93.88% of Python3 online submissions for Find All Numbers Disappeared in an Array.
Memory Usage: 25.5 MB, less than 5.01% of Python3 online submissions for Find All Numbers Disappeared in an Array.
"""


class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        return set([i for i in range(1, len(nums)+1)]) - set(nums)
