'''
https://leetcode.com/problems/house-robber/submissions/
Runtime: 20 ms, faster than 98.46% of Python3 online submissions for House Robber.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for House Robber.
'''

class Solution:
    def rob(self, nums: List[int]) -> int:
        
        if not nums:
            return 0
        
        if len(nums) <= 2:
            return max(nums)
    
        pprv, prv, cur = 0, 0, 0
        
        for i in nums:
            pprv = prv
            prv = cur
            cur = max(pprv + i, prv)
            
        return cur