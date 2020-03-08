"""
https://leetcode.com/problems/permutations-ii/
Runtime: 60 ms, faster than 46.43% of Python3 online submissions for Permutations II.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Permutations II.
"""


from itertools import permutations


class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        return set(permutations(nums))
