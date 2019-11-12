"""
https://leetcode.com/problems/minimum-path-sum/
Runtime: 112 ms, faster than 79.15% of Python3 online submissions for Minimum Path Sum.
Memory Usage: 15.3 MB, less than 22.81% of Python3 online submissions for Minimum Path Sum.
"""

class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if i == j == 0:
                    continue
                elif i == 0:
                    grid[i][j] += grid[i][j-1]
                elif j == 0:
                    grid[i][j] += grid[i-1][j]
                else:
                    grid[i][j] = grid[i][j] + grid[i][j-1] if grid[i][j-1] < grid[i-1][j] else grid[i][j]+grid[i-1][j]

        return grid[-1][-1]