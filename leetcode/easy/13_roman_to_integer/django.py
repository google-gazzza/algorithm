"""
https://leetcode.com/problems/roman-to-integer/submissions/
Runtime: 64 ms, faster than 20.03% of Python3 online submissions for Roman to Integer.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Roman to Integer.
"""

class Solution:
    def romanToInt(self, s: str) -> int:

        TABLE = {
            'I': (1, ('V', 'X')),
            'V': (5, ()),
            'X': (10, ('L', 'C')),
            'L': (50, ()),
            'C': (100, ('D','M')),
            'D': (500, ()),
            'M': (1000, ()),
        }

        val = 0
        tval = 0
        prvch = None

        for ch in s:

            if prvch == ch or prvch is None:
                tval += TABLE[ch][0]
                prvch = ch

            elif ch in TABLE[prvch][1]:
                val -= tval
                val += TABLE[ch][0]
                tval = 0
                prvch = ch

            else:
                val += tval
                tval = 0
                tval += TABLE[ch][0]
                prvch = ch

        val += tval

        return val

