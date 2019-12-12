"""
https://leetcode.com/problems/plus-one/
Runtime: 28 ms, faster than 92.67% of Python3 online submissions for Plus One.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Plus One.
"""

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:

        len_digits = len(digits)
        val = 0
        mul = 1

        for i in range(len_digits):
            val += digits[len_digits - 1 - i] * mul
            mul *= 10

        return list(str(val + 1))

