# 120-triangle
# leetcode/medium/120. Triangle
# URL: https://leetcode.com/problems/triangle/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:

        for rowIndex in range(len(triangle) - 2, -1, -1):
            for columnIndex in range(len(triangle[rowIndex])):
                triangle[rowIndex][columnIndex] += min(
                    triangle[rowIndex + 1][columnIndex],
                    triangle[rowIndex + 1][columnIndex + 1]
                )

        return triangle[0][0]


triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
print(Solution().minimumTotal(triangle))
# Output: 11

triangle = [[-10]]
print(Solution().minimumTotal(triangle))
# Output: -10
