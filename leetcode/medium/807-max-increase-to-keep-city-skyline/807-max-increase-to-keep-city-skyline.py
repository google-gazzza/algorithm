"""
807-max-increase-to-keep-city-skyline
leetcode/medium/807. Max Increase to Keep City Skyline
Difficulty: medium
URL: https://leetcode.com/problems/max-increase-to-keep-city-skyline/
"""

from typing import List


class Solution:
    def maxIncreaseKeepingSkyline(self, grid: List[List[int]]) -> int:
        _total = 0
        row_max = {}
        column_max = {}

        for row in range(len(grid)):
            for column in range(len(grid[0])):
                if row not in row_max:
                    row_max[row] = max(grid[row])
                if column not in column_max:
                    column_max[column] = max([_row[column] for _row in grid])

                candidate = min(row_max.get(row), column_max.get(column))
                _total = _total + candidate - grid[row][column]

                grid[row][column] = candidate

        return _total


def test():
    grid = [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]
    output = 35
    assert Solution().maxIncreaseKeepingSkyline(grid) == output

    grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    output = 0
    assert Solution().maxIncreaseKeepingSkyline(grid) == output