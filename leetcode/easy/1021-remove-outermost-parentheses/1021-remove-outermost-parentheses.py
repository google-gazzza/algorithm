"""
1021-remove-outermost-parentheses 
leetcode/easy/1021. Remove Outermost Parentheses
Difficulty: easy
URL: https://leetcode.com/problems/remove-outermost-parentheses/
"""

class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        balance = 0
        result = []

        for i in range(len(s)):
            if s[i] == '(':
                if balance != 0:
                    result.append(s[i])
                balance -= 1
            else:
                balance += 1
                if balance != 0:
                    result.append(s[i])

        return ''.join(result)


def test():
    solution = Solution()

    s = "(()())(())"
    output = "()()()"
    assert solution.removeOuterParentheses(s) == output

    s = "(()())(())(()(()))"
    output = "()()()()(())"
    assert solution.removeOuterParentheses(s) == output

    s = "()()"
    output = ""
    assert solution.removeOuterParentheses(s) == output
