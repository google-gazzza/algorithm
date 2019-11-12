"""https://leetcode.com/problems/valid-parentheses/

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true

Runtime: 56 ms, faster than 6.36% of Python3 online submissions for Valid Parentheses.
Memory Usage: 13.7 MB, less than 5.22% of Python3 online submissions for Valid Parentheses.
"""

class Solution:
    def isValid(self, s: str) -> bool:
        parentheses = ['()', '{}', '[]'] 
        while any(x in s for x in parentheses): 
            for p in parentheses: s = s.replace(p, '') 
        
        return not s 
