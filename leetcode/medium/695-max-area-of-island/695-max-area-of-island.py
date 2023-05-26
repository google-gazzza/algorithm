# leetcode/medium/695. Max Area of Island
# 695-max-area-of-island
# URL: https://leetcode.com/problems/max-area-of-island/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def dfs(self, grid, i, j):
        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == 0:
            return 0

        grid[i][j] = 0

        return 1 + \
            self.dfs(grid, i + 1, j) + \
            self.dfs(grid, i - 1, j) + \
            self.dfs(grid, i, j + 1) + \
            self.dfs(grid, i, j - 1)

    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        if not grid:
            return 0

        max_area = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1:
                    max_area = max(max_area, self.dfs(grid, i, j))

        return max_area


grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
# Output: 6

print(Solution().maxAreaOfIsland(grid))
