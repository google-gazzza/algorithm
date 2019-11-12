"""
https://leetcode.com/problems/sort-colors/
Runtime: 40 ms, faster than 69.34% of Python3 online submissions for Sort Colors.
Memory Usage: 13.6 MB, less than 6.25% of Python3 online submissions for Sort Colors.
"""
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        left = 0
        right = len(nums) - 1
        i = 0

        while i <= right:
            if nums[i] == 0:
                nums[i], nums[left] = nums[left], nums[i]
                left += 1
            elif nums[i] == 2:
                nums[i], nums[right] = nums[right], nums[i]
                right -= 1
                i -= 1
            i += 1
