"""https://leetcode.com/problems/move-zeroes/

Runtime: 44 ms, faster than 95.84% of Python3 online submissions for Move Zeroes.
Memory Usage: 13.9 MB, less than 100.00% of Python3 online submissions for Move Zeroes.
"""
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        key = 0
        n = len(nums)
        while key < n:
            if nums[key] is 0:
                nums.pop(key)
                nums.append(0)
                n -= 1
            else:
                key += 1
