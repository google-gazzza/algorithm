"""
https://leetcode.com/problems/add-digits/
Runtime: 44 ms, faster than 7.34% of Python3 online submissions for Add Digits.
Memory Usage: 12.6 MB, less than 100.00% of Python3 online submissions for Add Digits.
"""


class Solution:
    def addDigits(self, num: int) -> int:
        return 9 if num%9 == 0 and num > 0 else num%9
