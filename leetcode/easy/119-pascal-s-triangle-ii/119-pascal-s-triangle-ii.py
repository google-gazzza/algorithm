"""
119-pascal-s-triangle-ii
leetcode/easy/119. Pascal's Triangle II
Difficulty: easy
URL: https://leetcode.com/problems/pascals-triangle-ii/
"""

from typing import List


class Solution:
    def getRow(self, rowIndex: int, number_list=[]) -> List[int]:
        if rowIndex > -1:
            combination = [1]

            if len(number_list) > 1:
                for i in range(0, len(number_list) - 1):
                    combination.append(number_list[i] + number_list[i + 1])

                return self.getRow(rowIndex - 1, combination + [1])

            else:
                return self.getRow(rowIndex - 1, combination + number_list)

        return number_list