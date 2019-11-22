"""
https://leetcode.com/problems/longest-common-prefix/
Runtime: 32 ms, faster than 93.05% of Python3 online submissions for Longest Common Prefix.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Longest Common Prefix.
"""

from collections import Counter


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:

        if strs == []:
            return ''

        shortest = min([len(s) for s in strs])

        results = 0
        for i in range(shortest):
            counter = Counter([s[i] for s in strs])
            if len(counter) != 1:
                break
            results += 1

        return strs[0][:results]
