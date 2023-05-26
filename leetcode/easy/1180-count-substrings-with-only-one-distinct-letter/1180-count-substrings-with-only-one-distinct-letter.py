"""
1180-count-substrings-with-only-one-distinct-letter
leetcode/easy/1180. Count Substrings with Only One Distinct Letter
URL: https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/
"""

from typing import List


class Solution:
    def countLetters(self, s: str) -> int:
        s_len = len(s)
        i = 1

        s = s + '0'
        begin_char = s[i]
        begin_index = 0

        count_letters = []

        while i <= s_len:
            if s[i] != begin_char:
                count_letters.append((begin_char, i - begin_index))
                begin_char = s[i]
                begin_index = i

            i += 1

        return sum(map(lambda x: (x[1] ** 2 + x[1]) // 2, count_letters))


def test():
    s = "aaaba"
    output = 8
    assert Solution().countLetters(s) == output

    s = "aaaaaaaaaa"
    output = 55
    assert Solution().countLetters(s) == output