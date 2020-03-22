'''
https://leetcode.com/problems/rotate-array/
Runtime: 64 ms, faster than 57.20% of Python3 online submissions for Rotate Array.
Memory Usage: 14.1 MB, less than 5.09% of Python3 online submissions for Rotate Array.
'''


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        
        len_nums = len(nums)
        k = k % len_nums

        nums[:] = nums[-k:] + nums[:-k]
        
        