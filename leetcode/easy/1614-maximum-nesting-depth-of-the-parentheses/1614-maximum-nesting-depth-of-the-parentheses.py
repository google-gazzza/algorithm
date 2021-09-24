"""
1614-maximum-nesting-depth-of-the-parentheses
leetcode/easy/1614. Maximum Nesting Depth of the Parentheses
Difficulty: easy
URL: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
"""

class Solution:
    def maxDepth(self, s: str, count=0) -> int:
        filtered_symbols = ''.join([char for char in s if char == '(' or char == ')'])
        count = 0

        while '()' in filtered_symbols:
            filtered_symbols = filtered_symbols.replace('()', '')
            count += 1

        return count


def test():
    solution = Solution()

    s = "(1+(2*3)+((8)/4))+1"
    output = 3
    assert solution.maxDepth(s) == output

    s = "(1)+((2))+(((3)))"
    output = 3
    assert solution.maxDepth(s) == output

    s = "1+(2*3)/(2-1)"
    output = 1
    assert solution.maxDepth(s) == output

    s = "1"
    output = 0
    assert solution.maxDepth(s) == output
