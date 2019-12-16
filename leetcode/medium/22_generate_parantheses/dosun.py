"""https://leetcode.com/problems/generate-parentheses/submissions/

Runtime: 32 ms, faster than 90.40% of Python3 online submissions for Generate Parentheses.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Generate Parentheses.
"""
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        return self.backtracking(open=n, close=n, str='', result=list())
        
    def backtracking(self, open, close, str, result):
        if open: self.backtracking(open - 1, close, str + "(", result)
        if close and open < close: self.backtracking(open, close - 1, str + ")", result)
        if not close: result.append(str)
        
        return result
