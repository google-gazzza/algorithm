"""
https://leetcode.com/problems/number-of-islands/
Runtime: 328 ms, faster than 5.19% of Python3 online submissions for Number of Islands.
Memory Usage: 31.5 MB, less than 5.13% of Python3 online submissions for Number of Islands.
"""


import numpy as np


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        grid = np.array(grid)
        grid = grid.astype('int')

        def recursive(i, j):
            if i < 0 or j < 0 or i == len(grid) or j == len(grid[i]):
                return 0
            if grid[i][j] == 1:
                grid[i][j] = 0
                recursive(i - 1, j)
                recursive(i + 1, j)
                recursive(i, j - 1)
                recursive(i, j + 1)
            else:
                return 0

        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 1:
                    count += 1
                    recursive(i, j)

        return count
