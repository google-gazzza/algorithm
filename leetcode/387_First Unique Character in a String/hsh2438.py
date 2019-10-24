"""
https://leetcode.com/problems/first-unique-character-in-a-string
Runtime: 184 ms, faster than 16.03% of Python3 online submissions for First Unique Character in a String.
Memory Usage: 13.9 MB, less than 6.52% of Python3 online submissions for First Unique Character in a String.
"""


class Solution:
    def firstUniqChar(self, s: str) -> int:
        ss = {}
        for idx, ch in enumerate(s):
            if ch in ss.keys():
                ss[ch][1] += 1
            else:
                ss[ch] = [idx, 1]

        min_idx = len(s)
        count = 0
        for key in ss.keys():
            if ss[key][1] == 1:
                count += 1
                if ss[key][0] < min_idx:
                    min_idx = ss[key][0]

        if count == 0:
            return -1

        return min_idx
