"""
200-number-of-islands
leetcode/medium/200. Number of Islands
Difficulty: medium
URL: https://leetcode.com/problems/number-of-islands/
"""

from typing import List


class Solution:
    def eliminate_island(self, grid, row_index, column_index):

        if grid[row_index][column_index] == '1':
            grid[row_index][column_index] = '0'

            if row_index > 0:
                self.eliminate_island(grid, row_index - 1, column_index)
            if row_index < len(grid) - 1:
                self.eliminate_island(grid, row_index + 1, column_index)
            if column_index > 0:
                self.eliminate_island(grid, row_index, column_index - 1)
            if column_index < len(grid[0]) - 1:
                self.eliminate_island(grid, row_index, column_index + 1)

    def numIslands(self, grid: List[List[str]]) -> int:
        island_count = 0

        for row_index in range(len(grid)):
            for column_index in range(len(grid[row_index])):
                if grid[row_index][column_index] == '1':
                    island_count += 1
                    self.eliminate_island(grid, row_index, column_index)

        return island_count


def test():
    grid = [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"]
    ]
    output = 1
    assert Solution().numIslands(grid) == output

    grid = [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"]
    ]
    output = 3
    assert Solution().numIslands(grid) == output