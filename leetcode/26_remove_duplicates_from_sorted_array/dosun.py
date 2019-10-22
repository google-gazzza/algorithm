"""https://leetcode.com/problems/remove-duplicates-from-sorted-array/

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Runtime: 108 ms, faster than 36.00% of Python3 online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 15.7 MB, less than 5.74% of Python3 online submissions for Remove Duplicates from Sorted Array.
"""

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        while i < len(nums) - 1:
            if nums[i] == nums[i + 1]: del nums[i]
            else: i += 1

        return len(nums)
        
