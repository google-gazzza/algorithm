"""
1828-queries-on-number-of-points-inside-a-circle 
leetcode/easy/1828. Queries on Number of Points Inside a Circle
URL: https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/
"""
from typing import List

import math


class Solution:
    def calculate_hypotenuse(self, point_a, point_b):
        return math.sqrt(abs(point_a[0] - point_b[0]) ** 2 + abs(point_a[1] - point_b[1]) ** 2)

    def countPoints(self, points: List[List[int]], queries: List[List[int]]) -> List[int]:
        result = []

        for query in queries:
            result.append(
                len([1 for point in points if (self.calculate_hypotenuse(query, point) <= query[2])])
            )

        return result


def test_max():
    points = [[1, 3], [3, 3], [5, 3], [2, 2]]
    queries = [[2, 3, 1], [4, 3, 1], [1, 1, 2]]
    output = [3, 2, 2]
    assert Solution().countPoints(points, queries) == output

    points = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]
    queries = [[1, 2, 2], [2, 2, 2], [4, 3, 2], [4, 3, 3]]
    output = [2, 3, 2, 4]
    assert Solution().countPoints(points, queries) == output