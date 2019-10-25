"""https://leetcode.com/problems/first-unique-character-in-a-string/

Runtime: 104 ms, faster than 82.60% of Python3 online submissions for First Unique Character in a String.
Memory Usage: 14 MB, less than 6.52% of Python3 online submissions for First Unique Character in a String.
"""

import collections

class Solution:
    def firstUniqChar(self, s: str) -> int:
        counters = collections.Counter(s)
        for i in range(len(s)):
            if counters[s[i]] == 1:
                return i
        return -1
