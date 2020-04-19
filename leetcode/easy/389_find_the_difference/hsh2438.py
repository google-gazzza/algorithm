"""
https://leetcode.com/problems/find-the-difference/
Runtime: 36 ms, faster than 40.58% of Python3 online submissions for Find the Difference.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Find the Difference.
""'

from collections import Counter


class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        return list((Counter(t) - Counter(s)).keys())[0]
