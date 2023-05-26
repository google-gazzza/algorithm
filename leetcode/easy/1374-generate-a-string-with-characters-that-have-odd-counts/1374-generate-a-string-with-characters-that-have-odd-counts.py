"""
1374-generate-a-string-with-characters-that-have-odd-counts
leetcode/easy/1374. Generate a String With Characters That Have Odd Counts
Difficulty: easy
URL: https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
"""


class Solution:
    def generateTheString(self, n: int) -> str:
        if n != 1 and n % 2 == 1:
            return f"ab{'c' * (n - 2)}"

        return f"a{'b' * (n - 1)}"


def test():
    n = 4
    output = "abbb"
    assert Solution().generateTheString(n) == output

    n = 2
    output = "ab"
    assert Solution().generateTheString(n) == output

    n = 5
    output = 'abccc'
    assert Solution().generateTheString(n) == output