"""
https://leetcode.com/problems/single-number-ii/
Runtime: 56 ms, faster than 79.67% of Python3 online submissions for Single Number II.
Memory Usage: 14.6 MB, less than 53.33% of Python3 online submissions for Single Number II.
"""


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        return int(sum(nums) - (sum(nums) - sum(set(nums)))*3/2)
    
