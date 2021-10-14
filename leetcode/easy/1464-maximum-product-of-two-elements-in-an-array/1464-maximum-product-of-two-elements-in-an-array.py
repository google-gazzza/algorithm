"""
1464-maximum-product-of-two-elements-in-an-array
leetcode/easy/1464. Maximum Product of Two Elements in an Array
URL: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
"""
from typing import List


class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        l = sorted(nums)[-2:]
        return (l[0] - 1) * (l[1] - 1)


def test():
    nums = [3, 4, 5, 2]
    output = 12
    assert Solution().maxProduct(nums) == output

    nums = [1, 5, 4, 5]
    output = 16
    assert Solution().maxProduct(nums) == output

    nums = [3, 7]
    output = 12
    assert Solution().maxProduct(nums) == output
