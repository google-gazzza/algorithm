# 861-score-after-flipping-matrix
# leetcode/medium/861. Score After Flipping Matrix
# URL: https://leetcode.com/problems/score-after-flipping-matrix/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from copy import copy
from typing import List
from xmlrpc.client import Boolean


class Solution:

    def flippingColumn(self, grid: List[List[int]]) -> Boolean:
        is_flipped = False

        for column_index in range(len(grid[0])):
            one_count = 0
            zero_count = 0

            for row_index in range(len(grid)):
                if grid[row_index][column_index] == 1:
                    one_count += 1
                else:
                    zero_count += 1

            if zero_count > one_count:
                is_flipped = True

                for row_index in range(len(grid)):
                    if grid[row_index][column_index] == 1:
                        grid[row_index][column_index] = 0
                    else:
                        grid[row_index][column_index] = 1

        return is_flipped

    def convertToInteger(self, binaryList: List[int]) -> int:
        binaryString = ''.join(str(e) for e in binaryList)

        return int(binaryString, 2)

    def flippingList(self, binaryList: List[int]) -> List[int]:
        binaryListCopy = copy(binaryList)

        for index in range(len(binaryListCopy)):
            if binaryListCopy[index] == 1:
                binaryListCopy[index] = 0
            else:
                binaryListCopy[index] = 1

        return binaryListCopy

    def flippingRow(self, grid: List[List[int]]) -> Boolean:
        is_flipped = False

        for rowIndex in range(len(grid)):
            binaryValue = self.convertToInteger(grid[rowIndex])
            reversedBinaryValue = self.convertToInteger(self.flippingList(grid[rowIndex]))

            if binaryValue < reversedBinaryValue:
                is_flipped = True
                grid[rowIndex] = self.flippingList(grid[rowIndex])

        return is_flipped

    def matrixScore(self, grid: List[List[int]]) -> int:
        is_converted = True

        while is_converted:
            is_converted = self.flippingColumn(grid) or self.flippingRow(grid)

        return sum([self.convertToInteger(row) for row in grid])


grid = [[0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0]]
print(Solution().matrixScore(grid))
res = [
    [1, 1, 0, 0],
    [1, 0, 1, 0],
    [1, 1, 0, 0]
]
# Output: 39
# Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
