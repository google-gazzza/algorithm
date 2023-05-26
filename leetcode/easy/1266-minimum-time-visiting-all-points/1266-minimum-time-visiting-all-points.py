"""
1266-minimum-time-visiting-all-points 
leetcode/easy/1266. Minimum Time Visiting All Points
Difficulty: easy
URL: https://leetcode.com/problems/minimum-time-visiting-all-points/
"""

from typing import List


class Solution:
    def calculate_legs(self, point_a, point_b):
        return [abs(point_a[0] - point_b[0]), abs(point_a[1] - point_b[1])]

    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
        steps = 0

        for i in range(len(points) - 1):
            steps += max(self.calculate_legs(points[i], points[i + 1]))

        return steps


def test():
    solution = Solution()

    points = [[1, 1], [3, 4], [-1, 0]]
    output = 7
    assert solution.minTimeToVisitAllPoints(points) == output
