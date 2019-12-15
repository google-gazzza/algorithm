"""
https://leetcode.com/problems/plus-one/
Runtime: 24 ms, faster than 98.15% of Python3 online submissions for Plus One.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Plus One.
"""


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        return [int(digit) for digit in str(int(''.join([str(digit) for digit in digits])) + 1)]
