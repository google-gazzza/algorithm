"""
1704-determine-if-string-halves-are-alike
leetcode/easy/1704. Determine if String Halves Are Alike
URL: https://leetcode.com/problems/determine-if-string-halves-are-alike/
"""

import re


class Solution:
    def count_vowels(self, s) -> str:
        return len(re.findall(r"[aeiou]", s, flags=re.I))

    def halvesAreAlike(self, s: str) -> bool:
        even_index = len(s) // 2
        return self.count_vowels(s[:even_index]) == self.count_vowels(s[even_index:])


def test():
    s = "book"
    output = True
    assert Solution().halvesAreAlike(s) == output

    s = "textbook"
    output = False
    assert Solution().halvesAreAlike(s) == output
