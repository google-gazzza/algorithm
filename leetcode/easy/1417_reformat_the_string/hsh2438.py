"""
https://leetcode.com/problems/reformat-the-string/
Runtime: 48 ms, faster than 72.06% of Python3 online submissions for Reformat The String.
Memory Usage: 14 MB, less than 100.00% of Python3 online submissions for Reformat The String.
"""


class Solution:
    def reformat(self, s: str) -> str:
        alphabets = []
        digits = []
        
        for ch in s:
            if ch.isdigit():
                digits.append(ch)
            else:
                alphabets.append(ch)
                
        if abs(len(digits) - len(alphabets)) > 1:
            return ""
        
        if len(alphabets) > len(digits):
            longer = alphabets
            shorter = digits
        else:
            longer = digits
            shorter = alphabets
            
        result = ''
        for i in range(len(shorter)):
            result += longer[i] + shorter[i]
        
        if not len(shorter) == len(longer):
            result += longer[-1]
        
        return result
