"""
75-sort-colors
leetcode/medium/75. Sort Colors
Difficulty: medium
URL: https://leetcode.com/problems/sort-colors/
"""

from typing import List


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        for index, val in enumerate(sorted(nums)):
            nums[index] = val


def test():
    nums = [2, 0, 2, 1, 1, 0]
    Solution().sortColors(nums)
    output = [0, 0, 1, 1, 2, 2]
    assert nums == output
