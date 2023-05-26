"""
73-set-matrix-zeroes
leetcode/medium/73. Set Matrix Zeroes
Difficulty: medium
URL: https://leetcode.com/problems/set-matrix-zeroes/
"""

from typing import List


class Solution:
    def replace_to_zero(self, matrix, row_index, column_index, direction):

        if direction == "up":
            matrix[row_index][column_index] = 0
            if row_index > 0:
                self.replace_to_zero(matrix, row_index - 1, column_index, direction)

        if direction == "down":
            matrix[row_index][column_index] = 0
            if row_index < len(matrix) - 1:
                self.replace_to_zero(matrix, row_index + 1, column_index, direction)

        if direction == "left":
            matrix[row_index][column_index] = 0
            if column_index > 0:
                self.replace_to_zero(matrix, row_index, column_index - 1, direction)

        if direction == "right":
            matrix[row_index][column_index] = 0
            if column_index < len(matrix[0]) - 1:
                self.replace_to_zero(matrix, row_index, column_index + 1, direction)

    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        queue = []

        for row_index in range(len(matrix)):
            for column_index in range(len(matrix[0])):
                if matrix[row_index][column_index] == 0:
                    queue.append([row_index, column_index])

        for [row_index, column_index] in queue:
            self.replace_to_zero(matrix, row_index, column_index, "up")
            self.replace_to_zero(matrix, row_index, column_index, "down")
            self.replace_to_zero(matrix, row_index, column_index, "left")
            self.replace_to_zero(matrix, row_index, column_index, "right")


def test():
    matrix = [
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5]
    ]
    output = [
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0],
    ]
    Solution().setZeroes(matrix)

    assert matrix == output
