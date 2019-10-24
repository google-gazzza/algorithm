"""
https://leetcode.com/problems/subsets/
Runtime: 52 ms, faster than 7.87% of Python3 online submissions for Subsets.
Memory Usage: 13.9 MB, less than 5.95% of Python3 online submissions for Subsets.
"""

from itertools import combinations


class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []
        for i in range(len(nums)+1):
            result.extend([list(subset) for subset in combinations(nums, i)])
        return result
