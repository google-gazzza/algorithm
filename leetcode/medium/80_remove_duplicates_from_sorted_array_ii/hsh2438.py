"""
https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
Runtime: 44 ms, faster than 99.20% of Python3 online submissions for Remove Duplicates from Sorted Array II.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Remove Duplicates from Sorted Array II.
"""


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        
        for i in range(len(nums)-1, 1, -1):
            if nums[i] == nums[i-1] == nums[i-2]:
                del nums[i]
        
        return len(nums)
