"""
https://leetcode.com/problems/product-of-array-except-self/
Runtime: 136 ms, faster than 84.59% of Python3 online submissions for Product of Array Except Self.
Memory Usage: 20.4 MB, less than 82.00% of Python3 online submissions for Product of Array Except Self.
"""


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        results = [1] * len(nums)

        for i in range(1, len(nums)):
            results[i] = results[i - 1] * nums[i - 1]

        product = 1
        for i in range(len(nums) - 1, -1, -1):
            results[i] *= product
            product *= nums[i]

        return results
