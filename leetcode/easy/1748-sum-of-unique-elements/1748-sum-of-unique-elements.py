"""
1748-sum-of-unique-elements
leetcode/easy/1748. Sum of Unique Elements
Difficulty: easy
URL: https://leetcode.com/problems/sum-of-unique-elements/
"""

from typing import List


class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        return sum([num for num in nums if nums.index(num) == len(nums) - nums[::-1].index(num) - 1])


def test():
    nums = [1, 2, 3, 2]
    output = 4
    assert Solution().sumOfUnique(nums) == output

    nums = [1, 1, 1, 1, 1]
    output = 0
    assert Solution().sumOfUnique(nums) == output

    nums = [1, 2, 3, 4, 5]
    output = 15
    assert Solution().sumOfUnique(nums) == output
