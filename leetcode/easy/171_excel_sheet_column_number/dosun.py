"""https://leetcode.com/problems/excel-sheet-column-number/

Runtime: 12 ms, faster than 96.17% of Python online submissions for Excel Sheet Column Number.
Memory Usage: 11.8 MB, less than 16.13% of Python online submissions for Excel Sheet Column Number.
"""
class Solution(object):
    def titleToNumber(self, s):
        """
        :type s: str
        :rtype: int
        """
        number = 0
        letters = string.ascii_letters
        for c in s:
            if c in letters:
                number = number * 26 + (ord(c.upper()) - ord('A')) + 1
        return number
