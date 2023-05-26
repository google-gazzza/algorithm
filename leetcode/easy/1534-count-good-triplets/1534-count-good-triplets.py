"""
1534-count-good-triplets
leetcode/easy/1534. Count Good Triplets
Difficulty: easy
URL: https://leetcode.com/problems/count-good-triplets/
"""

from typing import List


class Solution:
    def countGoodTriplets(self, arr: List[int], a: int, b: int, c: int) -> int:
        count = 0

        for i in range(len(arr) - 2):
            for j in range(i + 1, len(arr) - 1):
                for k in range(j + 1, len(arr)):
                    if abs(arr[i] - arr[j]) <= a and \
                            abs(arr[j] - arr[k]) <= b and \
                            abs(arr[i] - arr[k]) <= c:
                        count += 1

        return count


def test():
    s = Solution()

    arr = [3, 0, 1, 1, 9, 7]
    a = 7
    b = 2
    c = 3
    output = 4

    assert s.countGoodTriplets(arr, a, b, c) == output

    arr = [1, 1, 2, 2, 3]
    a = 0
    b = 0
    c = 1
    output = 0
    assert s.countGoodTriplets(arr, a, b, c) == output
