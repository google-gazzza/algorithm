"""
163-missing-ranges
leetcode/easy/163. Missing Ranges
Difficulty: easy
URL: https://leetcode.com/problems/missing-ranges/
"""

from typing import List


class Solution:
    def findMissingRanges(self, nums: List[int], lower: int, upper: int) -> List[str]:
        _nums = [num for num in nums if (lower <= num <= upper)]
        _nums.insert(0, lower - 1)
        _nums.append(upper + 1)

        result = []

        for i in range(len(_nums) - 1):
            if _nums[i] + 1 == _nums[i + 1]:
                continue

            if _nums[i] + 2 == _nums[i + 1]:
                result.append(str(_nums[i] + 1))
            else:
                result.append(str(_nums[i] + 1) + "->" + str(_nums[i + 1] - 1))

        return result


def test():
    nums = [0, 1, 3, 50, 75]
    lower = 0
    upper = 99
    output = ["2", "4->49", "51->74", "76->99"]
    assert Solution().findMissingRanges(nums, lower, upper) == output

    nums = []
    lower = 1
    upper = 1
    output = ["1"]
    assert Solution().findMissingRanges(nums, lower, upper) == output
