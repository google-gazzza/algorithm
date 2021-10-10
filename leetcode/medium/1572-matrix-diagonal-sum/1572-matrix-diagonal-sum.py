"""
1572-matrix-diagonal-sum
leetcode/easy/1572. Matrix Diagonal Sum
URL: https://leetcode.com/problems/matrix-diagonal-sum/
"""

from typing import List


class Solution:
    def diagonalSum(self, matrix: List[List[int]]) -> int:
        begin_index = 0
        end_index = len(matrix) - 1
        total = 0

        for row in matrix:
            if begin_index == end_index:
                total += row[begin_index]
            else:
                total += row[begin_index] + row[end_index]

            begin_index += 1
            end_index -= 1

        return total


def test():
    mat = [[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]]
    output = 25

    assert Solution().diagonalSum(mat) == output

    mat = [[1, 1, 1, 1],
           [1, 1, 1, 1],
           [1, 1, 1, 1],
           [1, 1, 1, 1]]
    output = 8
    assert Solution().diagonalSum(mat) == output

    mat = [[5]]
    output = 5
    assert Solution().diagonalSum(mat) == output
