# 63-unique-paths-ii
# leetcode/medium/63. Unique Paths II
# URL: https://leetcode.com/problems/unique-paths-ii/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        obstacleGrid[-1][-1] = 1 if obstacleGrid[-1][-1] == 0 else 0

        for rowIndex in range(len(obstacleGrid) - 1, -1, -1):
            for columnIndex in range(len(obstacleGrid[0]) - 1, -1, -1):
                if rowIndex == len(obstacleGrid) - 1 and columnIndex == len(obstacleGrid[0]) - 1:
                    continue

                bottom = obstacleGrid[rowIndex + 1][columnIndex] if rowIndex + 1 < len(obstacleGrid) else 0
                right = obstacleGrid[rowIndex][columnIndex + 1] if columnIndex + 1 < len(obstacleGrid[0]) else 0
                obstacleGrid[rowIndex][columnIndex] = bottom + right if obstacleGrid[rowIndex][columnIndex] == 0 else 0

        return obstacleGrid[0][0]


obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
print(Solution().uniquePathsWithObstacles(obstacleGrid))
# Output: 2

obstacleGrid = [[0, 1], [0, 0]]
print(Solution().uniquePathsWithObstacles(obstacleGrid))
# Output: 1