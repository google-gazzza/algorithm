"""
https://leetcode.com/problems/excel-sheet-column-number/
Runtime: 28 ms, faster than 94.23% of Python3 online submissions for Excel Sheet Column Number.
Memory Usage: 12.6 MB, less than 100.00% of Python3 online submissions for Excel Sheet Column Number.
"""


class Solution:
    def titleToNumber(self, s: str) -> int:
        result = 0
        multiply = 1
        for i, ch in enumerate(s[::-1]):
            result += (ord(ch)-64)*multiply
            multiply *= 26
        
        return result
