"""
1252-cells-with-odd-values-in-a-matrix
leetcode/easy/1252. Cells with Odd Values in a Matrix
URL: https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
"""

from typing import List


class Solution:
    def oddCells(self, m: int, n: int, indices: List[List[int]]) -> int:
        matrix = [[0] * n for x in range(m)]

        for row_index, column_index in indices:
            matrix[row_index] = list(map(lambda x: x + 1, matrix[row_index]))

            for row in matrix:
                row[column_index] += 1

        odd_number = 0

        for row in matrix:
            print(len(list(filter(lambda x: x % 2 == 1, row))))
            odd_number += sum([1 for x in row if x % 2 == 1])

        return odd_number


def test():
    m = 2
    n = 3
    indices = [[0, 1], [1, 1]]
    output = 6
    assert Solution().oddCells(m, n, indices) == output

    m = 2
    n = 2
    indices = [[1, 1], [0, 0]]
    output = 0
    assert Solution().oddCells(m, n, indices) == output