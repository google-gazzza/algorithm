"""
https://leetcode.com/problems/remove-duplicates-from-sorted-array/
Runtime: 72 ms, faster than 52.37% of Python online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 13.6 MB, less than 71.88% of Python online submissions for Remove Duplicates from Sorted Array.
"""


class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        for i in range(len(nums) - 1, 0, -1):
            if nums[i] == nums[i - 1]:
                del nums[i]

        return len(nums)
