"""
2089-find-target-indices-after-sorting-array
leetcode/easy/2089. Find Target Indices After Sorting Array
Difficulty: easy
URL: https://leetcode.com/problems/find-target-indices-after-sorting-array/
"""

from typing import List
import numpy as np


# use numpy
class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        return [*(np.where(np.array(sorted(nums)) == target)[0])]


class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        return [index for index, num in enumerate(sorted(nums)) if num == target]


def test():
    nums = [1, 2, 5, 2, 3]
    target = 2
    output = [1, 2]
    assert Solution().targetIndices(nums, target) == output

    nums = [1, 2, 5, 2, 3]
    target = 3
    output = [3]
    assert Solution().targetIndices(nums, target) == output

    nums = [1, 2, 5, 2, 3]
    target = 5
    output = [4]
    assert Solution().targetIndices(nums, target) == output

    nums = [1, 2, 5, 2, 3]
    target = 4
    output = []
    assert Solution().targetIndices(nums, target) == output
