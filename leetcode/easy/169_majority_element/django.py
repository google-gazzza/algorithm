"""
https://leetcode.com/problems/majority-element/
Runtime: 196 ms, faster than 20.74% of Python3 online submissions for Majority Element.
Memory Usage: 14.1 MB, less than 100.00% of Python3 online submissions for Majority Element.
"""

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        numdict = {}
        major = None
        numlen = len(nums)
        
        for num in nums:
            if num not in numdict:
                numdict[num] = 1
            else:
                numdict[num] += 1
            
            if major is None:
                major = num
            elif numdict[num] > numdict[major]:
                major = num
            
            if numdict[num] >= numlen / 2:
                return major
            
        return major
                