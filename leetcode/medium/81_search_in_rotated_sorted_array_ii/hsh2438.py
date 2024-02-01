"""
https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
Runtime: 48 ms, faster than 91.10% of Python3 online submissions for Search in Rotated Sorted Array II.
Memory Usage: 13.3 MB, less than 100.00% of Python3 online submissions for Search in Rotated Sorted Array II.
"""


class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        return target in nums
