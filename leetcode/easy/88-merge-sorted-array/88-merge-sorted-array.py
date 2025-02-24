"""
88-merge-sorted-array
leetcode/easy/88. Merge Sorted Array
Difficulty: easy
URL: https://leetcode.com/problems/merge-sorted-array/
"""

from typing import List


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        new = sorted([*nums1[:m], *nums2[:n]])

        for i in range(len(nums1)):
            nums1[i] = new[i]


def test():
    nums1 = [1, 2, 3, 0, 0, 0]
    m = 3
    nums2 = [2, 5, 6]
    n = 3
    output = [1, 2, 2, 3, 5, 6]
    Solution().merge(nums1, m, nums2, n)
    assert nums1 == output

    nums1 = [1]
    m = 1
    nums2 = []
    n = 0
    output = [1]
    Solution().merge(nums1, m, nums2, n)
    assert nums1 == output

    nums1 = [0]
    m = 0
    nums2 = [1]
    n = 1
    output = [1]
    Solution().merge(nums1, m, nums2, n)
    assert nums1 == output
    