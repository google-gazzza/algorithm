"""
https://leetcode.com/problems/pascals-triangle-ii/
Runtime: 28 ms, faster than 71.47% of Python3 online submissions for Pascal's Triangle II.
Memory Usage: 13.9 MB, less than 7.69% of Python3 online submissions for Pascal's Triangle II.
"""


class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        results = [1]
        for i in range(rowIndex):
            temp = [1]
            for j in range(i):
                temp.append(results[j] + results[j+1])
            temp.append(1)
            results = temp
        return results
