"""
https://leetcode.com/problems/number-of-islands/
Runtime: 140 ms, faster than 95.64% of Python3 online submissions for Number of Islands.
Memory Usage: 14 MB, less than 45.30% of Python3 online submissions for Number of Islands.
"""


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        def recursive(i, j):
            if i < 0 or j < 0 or i == len(grid) or j == len(grid[i]):
                return 0
            if grid[i][j] == "1":
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
                if grid[i][j] == "1":
                    count += 1
                    recursive(i, j)

        return count
