"""
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
Runtime: 80 ms, faster than 5.04% of Python3 online submissions for Find Minimum in Rotated Sorted Array II.
Memory Usage: 13.1 MB, less than 100.00% of Python3 online submissions for Find Minimum in Rotated Sorted Array II.
"""


import bisect


class Solution:
    def findMin(self, nums: List[int]) -> int:
        nums_bisect = []
        for num in nums:
            bisect.insort_right(nums_bisect, num)
        
        return nums_bisect[0]        
        
