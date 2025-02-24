from typing import List


class Solution:
    def multiply(self, mat1: List[List[int]], mat2: List[List[int]]) -> List[List[int]]:
        result = []

        for i in range(len(mat1)):
            row = []

            for j in range(len(mat2[0])):
                value = 0

                for k in range(len(mat2)):
                    value += mat1[i][k] * mat2[k][j]

                row.append(value)

            result.append(row)

        return result
