"""
198-house-robber
leetcode/medium/198. House Robber
Difficulty: medium
URL: https://leetcode.com/problems/house-robber/
"""

from typing import List


class Solution:
    def rob(self, nums: List[int]) -> int:
        n1 = 0
        n2 = 0

        for num in nums:
            candidate = max(n1 + num, n2)
            n1 = n2
            n2 = candidate

        return n2


def test():
    nums = [1, 2, 3, 1]
    output = 4
    assert Solution().rob(nums) == output

    nums = [2, 7, 9, 3, 1]
    output = 12
    assert Solution().rob(nums) == output
