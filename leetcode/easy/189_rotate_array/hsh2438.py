"""
https://leetcode.com/problems/rotate-array/
Runtime: 136 ms, faster than 18.07% of Python3 online submissions for Rotate Array.
Memory Usage: 14.2 MB, less than 5.09% of Python3 online submissions for Rotate Array.
"""


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        for i in range(k):
            nums.insert(0, nums[-1])
            nums.pop()
