"""
1588-sum-of-all-odd-length-subarrays
leetcode/easy/1588. Sum of All Odd Length Subarrays
Difficulty: easy
URL: https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
"""

from typing import List


class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        result = 0

        for i in range(1, len(arr) + 1, 2):
            for j in range(len(arr) - i + 1):
                result += sum(arr[j:j + i])

        return result


def test():
    solution = Solution()

    arr = [1, 4, 2, 5, 3]
    expect = 58
    assert solution.sumOddLengthSubarrays(arr) == expect

    arr = [1, 2]
    expect = 3
    assert solution.sumOddLengthSubarrays(arr) == expect
