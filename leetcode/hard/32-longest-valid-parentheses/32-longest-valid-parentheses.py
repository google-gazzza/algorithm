# 32-longest-valid-parentheses
# leetcode/hard/32. Longest Valid Parentheses
# URL: https://leetcode.com/problems/longest-valid-parentheses/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
import re


class Solution:
    def replace_valid_parentheses(self, s: str) -> str:
        while "()" in s:
            s = s.replace("()", "11", 1)

        match = re.search(r'\(\d+\)', s)

        while match:
            start_index, end_index = match.span()
            string_list = list(s)
            string_list[start_index] = "1"
            string_list[end_index - 1] = "1"
            s = "".join(string_list)

            match = re.search(r'\(\d+\)', s)

        return s

    def count_max_digits(self, s: str) -> int:
        max_count = 0
        count = 0
        s += '0'

        for c in s:
            if c == '1':
                count += 1
            else:
                if count > max_count:
                    max_count = count
                count = 0

        return max_count

    def longestValidParentheses(self, s: str) -> int:
        s = self.replace_valid_parentheses(s)

        return self.count_max_digits(s)


s = "(()"
print(Solution().longestValidParentheses(s))
# Output: 2

s = ")()())"
print(Solution().longestValidParentheses(s))
# Output: 4

s = "()(())"
print(Solution().longestValidParentheses(s))
# 6
