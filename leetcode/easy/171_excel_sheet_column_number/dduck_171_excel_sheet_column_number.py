# https://leetcode.com/problems/excel-sheet-column-number

from unittest import TestCase

# Runtime: 32 ms, faster than 53.72% of Python3 online submissions for Excel Sheet Column Number.
# Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Excel Sheet Column Number.
# Runtime: 28 ms, faster than 81.16% of Python3 online submissions for Excel Sheet Column Number.
# Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Excel Sheet Column Number.

class Solution:
    def titleToNumber(self, s: str) -> int:
        sum = 0
        for i, v in enumerate(s[::-1]):
            column_number = ord(v) % 65 + 1
            exponent = (26 ** i)
            sum += exponent * column_number or column_number
        return sum


TestCase().assertEqual(Solution().titleToNumber('A'), 1)
# Input: "A"
# Output: 1

TestCase().assertEqual(Solution().titleToNumber('AA'), 27)
TestCase().assertEqual(Solution().titleToNumber('AAA'), 703)
#
TestCase().assertEqual(Solution().titleToNumber('AB'), 28)
# # Input: "AB"
# # Output: 28
#
TestCase().assertEqual(Solution().titleToNumber('ZY'), 701)
# Input: "ZY"
# Output: 701
