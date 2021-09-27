"""
https://leetcode.com/problems/pascals-triangle-ii/
Runtime: 28 ms, faster than 84.76% of Python3 online submissions for Pascal's Triangle II.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Pascal's Triangle II.
"""


class Solution:
    def getRow(self, rowIndex: int) -> List[int]:

        result = []

        for i in range(rowIndex + 1):
            if i == 0:
                result.append([1])
            else:
                prvRow = result[i - 1]
                prvRow1 = prvRow + [0]
                prvRow2 =[0] + prvRow
                currentRow = [x + y for x, y in zip(prvRow1, prvRow2)]

                result.append(currentRow)
        return result[-1]
