"""
1732-find-the-highest-altitude
leetcode/easy/1732. Find the Highest Altitude
Difficulty: easy
URL: https://leetcode.com/problems/find-the-highest-altitude/
"""

from typing import List
from functools import accumulate


class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        max_altitude = 0
        height = 0

        for x in gain:
            height += x
            max_altitude = max(max_altitude, height)

        return max_altitude


def largestAltitude(self, A):
    return max(0, max(accumulate(A)))


def test():
    solution = Solution()

    assert solution.largestAltitude([-5, 1, 5, 0, -7]) == 1
    assert solution.largestAltitude([-4, -3, -2, -1, 4, 3, 2]) == 0
