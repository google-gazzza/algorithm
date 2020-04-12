'''
https://leetcode.com/problems/move-zeroes/
Runtime: 36 ms, faster than 99.48% of Python3 online submissions for Move Zeroes.
Memory Usage: 14 MB, less than 100.00% of Python3 online submissions for Move Zeroes.
'''

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        
        notzeronum = 0
        total_len = len(nums)
        
        for i in range(total_len):
            if nums[i] != 0:
                nums[notzeronum] = nums[i]
                notzeronum += 1
                
        for i in range(notzeronum, total_len):
            nums[i] = 0