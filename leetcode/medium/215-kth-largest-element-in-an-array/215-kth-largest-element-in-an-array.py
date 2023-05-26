"""
215-kth-largest-element-in-an-array
leetcode/medium/215. Kth Largest Element in an Array
difficulty: medium
URL: https://leetcode.com/problems/kth-largest-element-in-an-array/
"""

from typing import List


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        return sorted(nums)[-k]


def test():
    nums = [3, 2, 1, 5, 6, 4]
    k = 2
    output = 5
    assert Solution().findKthLargest(nums, k) == output

    nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
    k = 4
    output = 4
    assert Solution().findKthLargest(nums, k) == output
