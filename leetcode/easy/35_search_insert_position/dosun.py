"""https://leetcode.com/problems/search-insert-position/

Runtime: 48 ms, faster than 99.57% of Python3 online submissions for Search Insert Position.
Memory Usage: 13.4 MB, less than 100.00% of Python3 online submissions for Search Insert Position.
"""
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if target > nums[-1]: return len(nums)
        for k, v in enumerate(nums):
            if v >= target: return k
