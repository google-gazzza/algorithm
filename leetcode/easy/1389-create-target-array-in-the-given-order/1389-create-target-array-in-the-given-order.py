"""
1389-create-target-array-in-the-given-order 
leetcode/easy/1389. Create Target Array in the Given Order
Difficulty: easy
URL: https://leetcode.com/problems/create-target-array-in-the-given-order/
"""

from typing import List


class Solution:
    def createTargetArray(self, nums: List[int], index_list: List[int]) -> List[int]:
        result = []

        for num, index in zip(nums, index_list):
            result.insert(index, num)

        return result


def test():
    s = Solution()

    nums = [0, 1, 2, 3, 4]
    index = [0, 1, 2, 2, 1]
    expect_result = [0, 4, 1, 3, 2]
    assert s.createTargetArray(nums, index) == expect_result

    nums = [1, 2, 3, 4, 0]
    index = [0, 1, 2, 3, 0]
    expect_result = [0, 1, 2, 3, 4]
    assert s.createTargetArray(nums, index) == expect_result
