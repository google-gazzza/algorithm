"""
https://leetcode.com/problems/maximum-product-of-three-numbers/
Runtime: 276 ms, faster than 68.05% of Python3 online submissions for Maximum Product of Three Numbers.
Memory Usage: 14.9 MB, less than 6.67% of Python3 online submissions for Maximum Product of Three Numbers.
"""


class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        nums.sort()
        return max(nums[-1]*nums[-2]*nums[-3], nums[-1]*nums[0]*nums[1])
