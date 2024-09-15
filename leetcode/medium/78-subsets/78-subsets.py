"""
78-subsets
leetcode/easy/78. Subsets
Difficulty: medium
URL: https://leetcode.com/problems/subsets/
"""

from typing import List


class Solution:
    def get_subsets(self, nums, result, prev=[]):
        if len(nums) == 0:
            return

        for index, value in enumerate(nums):
            print(index, value)
            result.append(prev + [value])
            self.get_subsets(nums[index + 1:], result, prev + [value])

    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = [[]]
        self.get_subsets(nums, result)

        return result


def test():
    nums = [1, 2, 3]
    output = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
    assert Solution().subsets(nums) == output

    nums = [0]
    output = [[], [0]]
    assert Solution().subsets(nums) == output
