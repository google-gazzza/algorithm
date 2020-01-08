"""
https://leetcode.com/problems/search-in-rotated-sorted-array/
Runtime: 52 ms, faster than 30.36% of Python3 online submissions for Search in Rotated Sorted Array.
Memory Usage: 13 MB, less than 99.30% of Python3 online submissions for Search in Rotated Sorted Array.
"""


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        return nums.index(target) if target in nums else -1
