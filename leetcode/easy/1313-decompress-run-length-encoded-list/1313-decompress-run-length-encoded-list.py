"""
1313-decompress-run-length-encoded-list 
leetcode/easy/1313. Decompress Run-Length Encoded List
Difficulty: easy
URL: https://leetcode.com/problems/decompress-run-length-encoded-list/
"""


from typing import List

from functools import reduce


class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        return reduce(
            lambda a, b: a + b,
            [nums[i] * [nums[i + 1]] for i in range(0, len(nums), 2)]
        )


class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        return sum([nums[i] * [nums[i + 1]] for i in range(0, len(nums), 2)], [])


def test():
    s = Solution()

    nums = [1, 2, 3, 4]
    expect_result = [2, 4, 4, 4]
    assert s.decompressRLElist(nums) == expect_result

    nums = [1, 1, 2, 3]
    expect_result = [1, 3, 3]
    assert s.decompressRLElist(nums) == expect_result

