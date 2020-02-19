"""
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
Runtime: 36 ms, faster than 83.10% of Python3 online submissions for Find Minimum in Rotated Sorted Array.
Memory Usage: 13 MB, less than 100.00% of Python3 online submissions for Find Minimum in Rotated Sorted Array.
"""


import bisect


class Solution:
    def findMin(self, nums: List[int]) -> int:
        nums_bisect = []
        for num in nums:
            bisect.insort_right(nums_bisect, num)
        
        return nums_bisect[0]
