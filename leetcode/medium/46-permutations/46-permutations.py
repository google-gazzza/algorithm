"""
46-permutations
leetcode/easy/46. Permutations
Difficulty: medium
URL: https://leetcode.com/problems/binary-tree-level-order-traversal/
"""

from typing import List


class Solution:
    def permutation(self, nums: List[int], prevSet, result):
        _nums = nums.copy()

        if len(_nums) == 0:
            result.append(prevSet.copy())

        for item in _nums:
            newNums = prevSet.copy()
            newNums.append(item)
            updatedNums = _nums.copy()
            updatedNums.remove(item)
            self.permutation(updatedNums, newNums, result)

    def permute(self, nums: List[int]) -> List[List[int]]:
        result = []
        self.permutation(nums, [], result)

        return result


import itertools


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        return [[*i] for i in itertools.permutations(nums, len(nums))]


def test():
    nums = [1, 2, 3]
    output = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
    assert Solution().permute(nums) == output

    nums = [0, 1]
    output = [[0, 1], [1, 0]]
    assert Solution().permute(nums) == output

    nums = [1]
    output = [[1]]
    assert Solution().permute(nums) == output
    