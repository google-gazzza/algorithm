"""
1844-replace-all-digits-with-characters
leetcode/easy/1844. Replace All Digits with Characters
Difficulty: easy
URL: https://leetcode.com/problems/replace-all-digits-with-characters/
"""


class Solution:
    def replaceDigits(self, s: str) -> str:
        alphabet = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        ]

        result = []

        for i in range(0, len(s)):
            if i % 2 == 0:
                result.append(s[i])
            else:
                result.append(alphabet[alphabet.index(s[i - 1]) + int(s[i])])

        return ''.join(result)


def test():
    solution = Solution()

    s = "a1c1e1"
    output = "abcdef"
    assert solution.replaceDigits(s) == output

    s = "a1b2c3d4e"
    output = "abbdcfdhe"
    assert solution.replaceDigits(s) == output
