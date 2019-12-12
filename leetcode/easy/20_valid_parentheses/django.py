"""
https://leetcode.com/problems/valid-parentheses/submissions/
Runtime: 28 ms, faster than 93.87% of Python3 online submissions for Valid Parentheses.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Valid Parentheses.
"""


class Solution:
    def isValid(self, s: str) -> bool:
        
        brackets = {
            '(': ')',
            '[': ']',
            '{': '}',
        }
        
        chlist = []
        
        for ch in s:
            if not chlist:
                if ch in brackets.values():
                    return False
                else:
                    chlist.append(ch)
                    
            elif ch in brackets:
                chlist.append(ch)
                
            elif ch in brackets.values():
                if ch == brackets[chlist[-1]]:
                    chlist.pop()
                else:
                    return False
                
        if chlist:
            return False
        
        return True
