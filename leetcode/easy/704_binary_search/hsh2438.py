"""
https://leetcode.com/problems/binary-search/
Runtime: 260 ms, faster than 57.25% of Python3 online submissions for Binary Search.
Memory Usage: 15 MB, less than 6.45% of Python3 online submissions for Binary Search.
"""


from bisect import bisect_left


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        i = bisect_left(nums, target)
        if i!= len(nums) and nums[i] == target:
            return i
        else:
            return -1
