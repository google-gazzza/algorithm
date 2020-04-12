"""https://leetcode.com/problems/zigzag-conversion/

Runtime: 44 ms, faster than 99.54% of Python3 online submissions for ZigZag Conversion.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for ZigZag Conversion.
"""
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1: return s
        numRow = 0
        move = 0
        result = [''] * len(s)

        for c in s:
            result[numRow] += c
            if numRow == 0: move = 1
            elif numRow == (numRows - 1): move = -1
            numRow += move

        return ''.join(result)
