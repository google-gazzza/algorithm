"""
https://leetcode.com/problems/pascals-triangle/
Runtime: 24 ms, faster than 96.52% of Python3 online submissions for Pascal's Triangle.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Pascal's Triangle.
"""


class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        results = []
        for i in range(numRows):
            if results == []:
                results.append([1])
            else:
                temp = [1]
                for j in range(i - 1):
                    temp.append(results[-1][j] + results[-1][j + 1])
                temp.append(1)
                results.append(temp)
        return results
