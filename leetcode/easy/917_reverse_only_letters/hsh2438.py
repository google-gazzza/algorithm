"""
https://leetcode.com/problems/reverse-only-letters/
Runtime: 16 ms, faster than 99.51% of Python3 online submissions for Reverse Only Letters.
Memory Usage: 13.8 MB, less than 5.56% of Python3 online submissions for Reverse Only Letters.
"""


class Solution:
    def reverseOnlyLetters(self, S: str) -> str:
        
        result = ''
        
        stack = []
        
        for ch in S:
            if ch.isalpha():
                stack.append(ch)
                
        for i in range(len(S)):
            if S[i].isalpha():
                result += stack.pop()
            else:
                result += S[i]
        
        return result
