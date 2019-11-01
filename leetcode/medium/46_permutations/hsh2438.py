"""
https://leetcode.com/problems/permutations/
Runtime: 40 ms, faster than 98.18% of Python3 online submissions for Permutations.
Memory Usage: 14 MB, less than 5.36% of Python3 online submissions for Permutations.
"""
import itertools


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        return list(itertools.permutations(nums))
