"""
1221-split-a-string-in-balanced-strings
leetcode/easy/1221. Split a String in Balanced Strings
Difficulty: easy
URL: https://leetcode.com/problems/split-a-string-in-balanced-strings/
"""

class Solution:
    def balancedStringSplit(self, s: str) -> int:
        balance = 0
        count = 0

        for i in range(len(s)):
            balance += 1 if s[i] == 'R' else -1

            if balance == 0:
                count += 1

        return count


def test():
    s = Solution()
    input = "RLRRLLRLRL"
    output = 4
    assert s.balancedStringSplit(input) == output

    input = "RLLLLRRRLR"
    output = 3
    assert s.balancedStringSplit(input) == output

    input = "LLLLRRRR"
    output = 1
    assert s.balancedStringSplit(input) == output

    input = "RLRRRLLRLL"
    output = 2
    assert s.balancedStringSplit(input) == output