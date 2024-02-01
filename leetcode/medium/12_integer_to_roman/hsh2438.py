"""
https://leetcode.com/problems/integer-to-roman/
Runtime: 40 ms, faster than 92.22% of Python3 online submissions for Integer to Roman.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Integer to Roman.
"""


class Solution:
    def intToRoman(self, num: int) -> str:
        symbols = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
        values = [1000, 500, 100, 50, 10, 5, 1]

        roman = ''

        for idx, value in enumerate(values):
            while num >= value:
                roman += symbols[idx]
                num -= value

        roman = roman.replace('DCCCC', 'CM').replace('CCCC', 'CD').\
            replace('LXXXX', 'XC').replace('XXXX', 'XL').\
            replace('VIIII', 'IX').replace('IIII', 'IV')

        return roman
        
