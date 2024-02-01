'''
https://leetcode.com/problems/missing-number/
Runtime: 200 ms, faster than 9.47% of Python3 online submissions for Missing Number.
Memory Usage: 14 MB, less than 90.32% of Python3 online submissions for Missing Number.
'''

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        
        nums.sort()
        
        for i in range(len(nums)):
            if nums[i] != i:
                return i
            
        return nums[-1] + 1
            
        