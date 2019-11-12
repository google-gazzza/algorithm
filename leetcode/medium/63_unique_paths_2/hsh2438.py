"""
https://leetcode.com/problems/unique-paths-ii/
Runtime: 44 ms, faster than 99.57% of Python3 online submissions for Unique Paths II.
Memory Usage: 12.9 MB, less than 95.56% of Python3 online submissions for Unique Paths II.
"""


class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        grid = obstacleGrid
        row = len(grid)
        if row == 0:
            return 0
        col = len(grid[0])

        path = [[0] * col] * row

        for i in range(row):
            for j in range(col):
                if grid[i][j] == 1:
                    path[i][j] = 0
                else:
                    if i == 0 and j == 0:
                        path[i][j] = 1
                    elif i == 0:
                        path[i][j] = path[i][j - 1]
                    elif j == 0:
                        path[i][j] = path[i - 1][j]
                    else:
                        path[i][j] = path[i - 1][j] + path[i][j - 1]

        return path[-1][-1]
