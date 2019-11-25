"""
https://leetcode.com/problems/valid-parentheses/
Runtime: 40 ms, faster than 43.56% of Python3 online submissions for Valid Parentheses.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Valid Parentheses.
"""


class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        
        for c in s:
            if c == '(' or c == '{' or c == '[':
                stack.append(c)
            elif c == ')':
                if len(stack) > 0 and stack[-1] == '(':
                    stack.pop()
                else:
                    return False
            elif c == '}':
                if len(stack) > 0 and stack[-1] == '{':
                    stack.pop()
                else:
                    return False
            elif c == ']':
                if len(stack) > 0 and stack[-1] == '[':
                    stack.pop()
                else:
                    return False
        
        if len(stack) == 0:
            return True
        else:
            return False
