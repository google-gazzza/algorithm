"""
704-binary-search
leetcode/easy/704. Binary Search
Difficulty: easy
URL: https://leetcode.com/problems/binary-search/
"""

from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if target not in nums:
            return -1

        left = 0
        right = len(nums)

        while True:
            middle = (left + right) // 2

            if nums[middle] == target:
                return middle

            if nums[middle] < target:
                left = middle
            else:
                right = middle


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        return nums.index(target) if target in nums else -1


def test():
    nums = [-1, 0, 3, 5, 9, 12]
    target = 9
    output = 4
    assert Solution().search(nums, target) == output

    nums = [-1, 0, 3, 5, 9, 12]
    target = 2
    output = -1
    assert Solution().search(nums, target) == output