"""https://leetcode.com/problems/find-peak-element/

Runtime: 48 ms, faster than 64.47% of Python3 online submissions for Find Peak Element.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Find Peak Element.
"""
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        n = len(nums)
        for idx, num in enumerate(nums):
            if (idx == 0 or num > nums[idx - 1]) and (idx == n - 1 or num > nums[idx + 1]):
                return idx
