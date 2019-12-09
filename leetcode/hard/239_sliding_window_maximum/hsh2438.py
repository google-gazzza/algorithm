"""
https://leetcode.com/problems/sliding-window-maximum/
Runtime: 684 ms, faster than 23.81% of Python3 online submissions for Sliding Window Maximum.
Memory Usage: 19.5 MB, less than 88.46% of Python3 online submissions for Sliding Window Maximum.
"""


class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        if nums == [] and k == 0:
            return []
        return [max(nums[i:i+k]) for i in range(len(nums)-k+1)]
