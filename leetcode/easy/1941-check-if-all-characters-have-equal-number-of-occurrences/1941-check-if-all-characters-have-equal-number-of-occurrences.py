"""
1941-check-if-all-characters-have-equal-number-of-occurrences
leetcode/easy/1941. Check if All Characters Have Equal Number of Occurrences
Difficulty: easy
URL: https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
"""

from collections import Counter


class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        count = list(Counter(s).values())
        return all(x == count[0] for x in count)

# Best solution
# https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/discuss/1359715/Python3-1-line
class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        return len(set(Counter(s).values())) == 1

def test():
    s = "abacbc"
    output = True
    assert Solution().areOccurrencesEqual(s) == output

    s = "aaabb"
    output = False
    assert Solution().areOccurrencesEqual(s) == output
