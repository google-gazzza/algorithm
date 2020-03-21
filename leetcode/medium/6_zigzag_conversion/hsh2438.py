"""
https://leetcode.com/problems/zigzag-conversion/
Runtime: 52 ms, faster than 87.03% of Python3 online submissions for ZigZag Conversion.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for ZigZag Conversion.
"""


class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s

        result = ''
        idx = (numRows-1)*2
        for i in range(numRows):
            left = i
            right = idx - i
            while left < len(s):
                result += s[left]
                if right >= len(s):
                    break
                if 0 < i < numRows-1:
                    result += s[right]
                left, right = left+idx, right+idx

        return result
