"""
1119-remove-vowels-from-a-string 
leetcode/easy/1119. Remove Vowels from a String
Difficulty: easy
URL: https://leetcode.com/problems/remove-vowels-from-a-string/
"""

import re


class Solution:
    def removeVowels(self, s: str) -> str:
        return re.sub(r"[aeiou]", "", s)


def test():
    s = Solution()
    input = "leetcodeisacommunityforcoders"
    expect_result = "ltcdscmmntyfrcdrs"
    assert s.removeVowels(input) == expect_result

    input = "aeiou"
    expect_result = ""
    assert s.removeVowels(input) == expect_result
