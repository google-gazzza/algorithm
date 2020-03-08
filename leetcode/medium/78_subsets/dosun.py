"""https://leetcode.com/problems/subsets/

Runtime: 28 ms, faster than 87.25% of Python3 online submissions for Subsets.
Memory Usage: 13 MB, less than 100.00% of Python3 online submissions for Subsets.
"""
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []
        for i in range(len(nums) + 1):
            combinations = (list(map(set, itertools.combinations(nums, i))))
            for combination in combinations:
                result.append(list(combination))
        
        return result
