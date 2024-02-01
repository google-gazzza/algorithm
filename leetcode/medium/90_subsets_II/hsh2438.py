"""
https://leetcode.com/problems/subsets-ii/
Runtime: 36 ms, faster than 69.83% of Python3 online submissions for Subsets II.
Memory Usage: 14 MB, less than 6.38% of Python3 online submissions for Subsets II.
"""


from itertools import combinations


class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        
        subsets = []
        
        nums.sort()
        
        for i in range(len(nums)+1):
            subsets.extend(combinations(nums, i))
        
        return set(subsets)
        
