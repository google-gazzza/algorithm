"""https://leetcode.com/problems/integer-to-roman/

Runtime: 52 ms, faster than 73.02% of Python3 online submissions for Integer to Roman.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Integer to Roman.
"""
class Solution:
    def intToRoman(self, num: int) -> str:
        result = ''
        roman_numeral = {1000 : 'M',
                          900 : 'CM',
                          500 : 'D',
                          400 : 'CD',
                          100 : 'C',
                          90 : 'XC',
                          50 : 'L',
                          40 : 'XL',
                          10 : 'X',
                          9 : 'IX',
                          5 : 'V',
                          4 : 'IV',
                          1 : 'I'}
        for r in roman_numeral:
            result += roman_numeral[r] * (num // r)
            num %= r
            if num == 0: break
        
        return result
