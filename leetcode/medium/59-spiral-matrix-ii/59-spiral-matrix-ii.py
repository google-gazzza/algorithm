# leetcode/medium/59. Spiral Matrix II
# 59-spiral-matrix-ii
# URL: https://leetcode.com/problems/spiral-matrix-ii/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        matrix = [[0 for _ in range(n)] for _ in range(n)]

        def fillTheMatrix(matrix, num, rowIndex, columnIndex):
            matrix[rowIndex][columnIndex] = num

            if rowIndex > 0 \
                    and matrix[rowIndex - 1][columnIndex] == 0 \
                    and matrix[rowIndex][columnIndex - 1] != 0:
                return fillTheMatrix(matrix, num + 1, rowIndex - 1, columnIndex)

            if columnIndex < n - 1 and matrix[rowIndex][columnIndex + 1] == 0:
                return fillTheMatrix(matrix, num + 1, rowIndex, columnIndex + 1)

            if rowIndex < n - 1 and matrix[rowIndex + 1][columnIndex] == 0:
                return fillTheMatrix(matrix, num + 1, rowIndex + 1, columnIndex)

            if columnIndex > 0 and matrix[rowIndex][columnIndex - 1] == 0:
                return fillTheMatrix(matrix, num + 1, rowIndex, columnIndex - 1)

            return matrix

        return fillTheMatrix(matrix, 1, 0, 0)


n = 3
solution = Solution()
print(solution.generateMatrix(n))
# Output: [[1,2,3],[8,9,4],[7,6,5]]

n = 1
print(solution.generateMatrix(n))
# Output: [[1]]
