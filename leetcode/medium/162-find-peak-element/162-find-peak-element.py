"""
162-find-peak-element
leetcode/medium/162. Find Peak Element
Difficulty: medium
URL: https://leetcode.com/problems/find-peak-element/
"""

from typing import List


class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        _len = len(nums)
        i = 0

        if _len == 1:
            return 0

        while i < _len - 1:
            if nums[i] > nums[i + 1]:
                return i
            i += 1

        return i


def test():
    nums = [1, 2, 3, 1]
    output = 2
    assert Solution().findPeakElement(nums) == output
    nums = [1, 2, 1, 3, 5, 6, 4]
    output = 1
    assert Solution().findPeakElement(nums) == output
