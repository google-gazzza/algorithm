"""
https://leetcode.com/problems/sort-characters-by-frequency/
Runtime: 32 ms, faster than 96.74% of Python3 online submissions for Sort Characters By Frequency.
Memory Usage: 15.2 MB, less than 7.14% of Python3 online submissions for Sort Characters By Frequency.
"""


from collections import Counter


class Solution:
    def frequencySort(self, s: str) -> str:
        return ''.join([key*value for key, value in Counter(s).most_common()])
