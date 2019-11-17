"""
https://leetcode.com/problems/set-matrix-zeroes/
Runtime: 144 ms, faster than 92.22% of Python3 online submissions for Set Matrix Zeroes.
Memory Usage: 13.3 MB, less than 97.44% of Python3 online submissions for Set Matrix Zeroes.
"""


class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """

        row = len(matrix)
        column = len(matrix[0])

        for i in range(row):
            for j in range(column):
                if matrix[i][j] == 0:
                    for r in range(row):
                        if matrix[r][j] != 0:
                            matrix[r][j] = 'c'
                    for c in range(column):
                        if matrix[i][c] != 0:
                            matrix[i][c] = 'c'

        for i in range(row):
            for j in range(column):
                if matrix[i][j] == 'c':
                    matrix[i][j] = 0
