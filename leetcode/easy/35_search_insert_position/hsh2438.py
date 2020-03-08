"""
https://leetcode.com/problems/search-insert-position/
Runtime: 124 ms, faster than 6.81% of Python3 online submissions for Search Insert Position.
Memory Usage: 13.3 MB, less than 100.00% of Python3 online submissions for Search Insert Position.
"""


import bisect


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        position = bisect.bisect(nums, target)
        if nums[position-1] == target:
            return position-1
        else:
            return position
        
