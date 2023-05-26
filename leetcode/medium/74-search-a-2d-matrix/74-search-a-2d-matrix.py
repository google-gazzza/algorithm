# 74-search-a-2d-matrix
# leetcode/medium/74. Search a 2D Matrix
# URL: https://leetcode.com/problems/search-a-2d-matrix/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference


from typing import List


class Solution:
    def searchTargetRowIndex(self, matrix: List[List[int]], target: int) -> int:
        left, right = 0, len(matrix) - 1

        while left <= right:
            mid = (left + right) // 2

            if matrix[mid][0] <= target <= matrix[mid][-1]:
                return mid
            elif matrix[mid][0] > target:
                right = mid - 1
            else:
                left = mid + 1

        return left

    def searchTargetColumnIndex(self, matrix: List[List[int]], rowIndex: int, target: int) -> int:
        left, right = 0, len(matrix[0]) - 1

        while left <= right:
            mid = (left + right) // 2

            if matrix[rowIndex][mid] == target:
                return mid
            elif matrix[rowIndex][mid] > target:
                right = mid - 1
            else:
                left = mid + 1

        return left

    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if not matrix or not matrix[0]:
            return False

        rowIndex = self.searchTargetRowIndex(matrix, target)

        if rowIndex == len(matrix):
            return False

        if matrix[rowIndex][0] == target:
            return True

        columnIndex = self.searchTargetColumnIndex(matrix, rowIndex, target)

        if matrix[rowIndex][columnIndex] and matrix[rowIndex][columnIndex] == target:
            return True

        return False


matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
target = 3

print(Solution().searchMatrix(matrix, target))
# Output: true

matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
target = 13
print(Solution().searchMatrix(matrix, target))
# Output: false
