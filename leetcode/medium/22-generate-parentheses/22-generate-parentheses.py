"""
22-generate-parentheses
leetcode/easy/22. Generate Parentheses
Difficulty: medium
URL: https://leetcode.com/problems/generate-parentheses/
"""

from typing import List


class Solution:
    def recursion(self, n, str, result):
        if len(str) == n * 2:
            result.append(str)
            return

        if str.count('(') < n:
            self.recursion(n, str + '(', result)

        if str.count('(') > str.count(')'):
            self.recursion(n, str + ')', result)

    def generateParenthesis(self, n: int) -> List[str]:
        result = []
        self.recursion(n, '', result)

        return result


def test():
    n = 3
    output = ["((()))", "(()())", "(())()", "()(())", "()()()"]
    assert Solution().generateParenthesis(n) == output

    n = 1
    output = ["()"]
    assert Solution().generateParenthesis(n) == output