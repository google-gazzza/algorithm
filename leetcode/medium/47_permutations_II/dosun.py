"""https://leetcode.com/problems/permutations-ii/

Runtime: 144 ms, faster than 24.65% of Python3 online submissions for Permutations II.
Memory Usage: 18.1 MB, less than 6.67% of Python3 online submissions for Permutations II.
"""
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        perms = [list(i) for i in itertools.permutations(nums)]
        result = set(tuple(perm) for perm in perms)
        
        return result
