"""
238-product-of-array-except-self
leetcode/medium/238. Product of Array Except Self
difficulty: medium
URL: https://leetcode.com/problems/product-of-array-except-self/
"""

from typing import List

from math import prod


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        _product = prod(nums)
        result = []
        is_uniq_zero = nums.index(0) == (len(nums) - 1 - nums[::-1].index(0)) if 0 in nums else -1

        for item in nums:
            if item != 0:
                result.append(_product // item)
            elif is_uniq_zero:
                left_product = prod(nums[:nums.index(0)])
                right_product = prod(nums[nums.index(0) + 1::])
                result.append(left_product * right_product)
            else:
                result.append(0)

        return result


def test():
    nums = [1, 2, 3, 4]
    output = [24, 12, 8, 6]
    assert Solution().productExceptSelf(nums) == output

    nums = [-1, 1, 0, -3, 3]
    output = [0, 0, 9, 0, 0]
    assert Solution().productExceptSelf(nums) == output
