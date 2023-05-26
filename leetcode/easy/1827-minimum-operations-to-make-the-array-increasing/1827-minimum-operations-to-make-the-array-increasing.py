"""
1827-minimum-operations-to-make-the-array-increasing
leetcode/easy/1827. Minimum Operations to Make the Array Increasing
URL: https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
"""

from typing import List


class Solution:
    def minOperations(self, nums: List[int]) -> int:
        maximum_num = nums[0]
        total = 0

        for item in nums[1:]:
            diff = item - maximum_num

            if diff > 0:
                maximum_num = item
            else:
                total += abs(diff) + 1
                maximum_num += 1

        return total


def test():
    nums = [1, 1, 1]
    output = 3
    assert Solution().minOperations(nums) == output

    nums = [1, 5, 2, 4, 1]
    output = 14
    assert Solution().minOperations(nums) == output

    nums = [8]
    output = 0
    assert Solution().minOperations(nums) == output
