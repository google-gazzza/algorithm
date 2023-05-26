"""
1684-count-the-number-of-consistent-strings
leetcode/easy/1684. Count the Number of Consistent Strings
Difficulty: easy
URL: https://leetcode.com/problems/count-the-number-of-consistent-strings/
"""

from typing import List


class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        allowed_set = set(allowed)

        return sum([1 for word in words if len(set(word) - allowed_set) == 0])


def test():
    solution = Solution()
    allowed = "ab"
    words = ["ad", "bd", "aaab", "baa", "badab"]
    output = 2

    assert solution.countConsistentStrings(allowed, words) == output

    allowed = "abc"
    words = ["a", "b", "c", "ab", "ac", "bc", "abc"]
    output = 7
    assert solution.countConsistentStrings(allowed, words) == output

    allowed = "cad"
    words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]
    output = 4
    assert solution.countConsistentStrings(allowed, words) == output
