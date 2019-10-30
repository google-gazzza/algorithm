"""https://leetcode.com/problems/rotate-array/

Runtime: 72 ms, faster than 81.18% of Python3 online submissions for Rotate Array.
Memory Usage: 15.2 MB, less than 5.09% of Python3 online submissions for Rotate Array
"""

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        k %= len(nums) # k = k % len(nums)
        nums[:] = nums[-k:] + nums[:-k]
