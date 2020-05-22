"""
https://leetcode.com/problems/peak-index-in-a-mountain-array/
Runtime: 96 ms, faster than 14.52% of Python3 online submissions for Peak Index in a Mountain Array.
Memory Usage: 15 MB, less than 6.06% of Python3 online submissions for Peak Index in a Mountain Array.
"""


class Solution:
    def peakIndexInMountainArray(self, A: List[int]) -> int:
        
        previous = -1
        for i in range(len(A)):
            if A[i] < previous:
                return i-1
            previous = A[i]
