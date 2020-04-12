"""
https://leetcode.com/problems/sort-colors/

Runtime: 40 ms, faster than 13.32% of Python3 online submissions for Sort Colors.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Sort Colors.
"""
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        swap = True
        while swap:
            swap = False
            for i in range(len(nums) - 1):
                if nums[i] > nums[i+1]:
                    nums[i], nums[i+1] = nums[i+1], nums[i]
                    swap = True            