"""
https://leetcode.com/problems/longest-valid-parentheses/
Runtime: 48 ms, faster than 43.10% of Python3 online submissions for Longest Valid Parentheses.
Memory Usage: 13.3 MB, less than 66.67% of Python3 online submissions for Longest Valid Parentheses.
"""


class Solution:
    def longestValidParentheses(self, s: str) -> int:
        open = []
        valid_set = []

        for idx, ch in enumerate(s):
            if ch == '(':
                open.append(idx)
            elif ch == ')':
                if len(open) > 0:
                    valid_set.append(open.pop())
                    valid_set.append(idx)

        valid_set.sort()
        longest = 0
        valid_length = 1
        for idx in range(1, len(valid_set)):
            if valid_set[idx] == valid_set[idx-1] + 1:
                valid_length += 1
            else:
                if valid_length > longest:
                    longest = valid_length
                valid_length = 1
        if valid_length > longest:
            longest = valid_length

        return longest if longest > 1 else 0
