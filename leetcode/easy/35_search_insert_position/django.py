"""
https://leetcode.com/problems/search-insert-position/submissions/
Runtime: 52 ms, faster than 85.25% of Python3 online submissions for Search Insert Position.
Memory Usage: 13.5 MB, less than 100.00% of Python3 online submissions for Search Insert Position.
"""
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        for i in range(len(nums)):
            if target > nums[i]:
                continue
            else:
                return i
        return len(nums)
