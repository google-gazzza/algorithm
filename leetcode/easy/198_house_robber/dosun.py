"""https://leetcode.com/problems/house-robber/

Runtime: 20 ms, faster than 50.58% of Python online submissions for House Robber.
Memory Usage: 11.9 MB, less than 10.64% of Python online submissions for House Robber.
"""
class Solution(object):
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        prev = 0
        current = 0
        for num in nums:
            prev, current = current, max(prev + num, current)
        return current
