"""
1913-maximum-product-difference-between-two-pairs
leetcode/easy/1913. Maximum Product Difference Between Two Pairs
Difficulty: easy
URL: https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
"""

from typing import List


class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        [a, b, *rest, c, d] = sorted(nums)
        return abs(a * b - c * d)


def test():
    solution = Solution()
    nums = [5, 6, 2, 7, 4]
    output = 34
    assert solution.maxProductDifference(nums) == output

    nums = [4, 2, 5, 9, 7, 4, 8]
    output = 64
    assert solution.maxProductDifference(nums) == output
