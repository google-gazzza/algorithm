"""https://leetcode.com/problems/valid-anagram/

Runtime: 48 ms, faster than 85.87% of Python3 online submissions for Valid Anagram.
Memory Usage: 14.1 MB, less than 9.38% of Python3 online submissions for Valid Anagram.
"""

import collections

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return collections.Counter(s) == collections.Counter(t)
