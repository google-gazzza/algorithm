"""https://leetcode.com/problems/majority-element/

Runtime: 192 ms, faster than 84.14% of Python3 online submissions for Majority Element.
Memory Usage: 15.1 MB, less than 7.14% of Python3 online submissions for Majority Element.
"""

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
    
        return max(set(nums), key=nums.count)
        
