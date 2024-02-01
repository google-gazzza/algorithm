"""
https://leetcode.com/problems/sliding-window-median/
Runtime: 4944 ms, faster than 8.05% of Python3 online submissions for Sliding Window Median.
Memory Usage: 14.8 MB, less than 20.00% of Python3 online submissions for Sliding Window Median.
"""


from statistics import median


class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
        
        return [median(nums[i:i+k]) for i in range(len(nums)-k+1)]
