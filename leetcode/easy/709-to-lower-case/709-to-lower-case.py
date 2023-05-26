"""
709-to-lower-case 
leetcode/easy/709. To Lower Case
Difficulty: easy
URL: https://leetcode.com/problems/to-lower-case/
"""

class Solution:
    def toLowerCase(self, s: str) -> str:
        return s.lower()


def test():
    solution = Solution()
    s = "Hello"
    output = "hello"
    assert solution.toLowerCase(s) == output

    s = "here"
    output = "here"
    assert solution.toLowerCase(s) == output

    s = "LOVELY"
    output = "lovely"
    assert solution.toLowerCase(s) == output
