"""
2006-count-number-of-pairs-with-absolute-difference-k
leetcode/easy/2006. Count Number of Pairs With Absolute Difference K
Difficulty: easy
URL: https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
"""

from typing import List
from itertools import combinations


class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        return sum([1 for [a, b] in combinations(nums, 2) if abs(a - b) == k])


def test():
    s = Solution()

    nums = [1, 2, 2, 1]
    k = 1
    output = 4
    assert s.countKDifference(nums, k) == output

    nums = [1, 3]
    k = 3
    output = 0
    assert s.countKDifference(nums, k) == output

    nums = [3, 2, 1, 5, 4]
    k = 2
    output = 3
    assert s.countKDifference(nums, k) == output