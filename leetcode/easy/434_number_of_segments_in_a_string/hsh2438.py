"""
https://leetcode.com/problems/number-of-segments-in-a-string/
Runtime: 28 ms, faster than 63.92% of Python3 online submissions for Number of Segments in a String.
Memory Usage: 13.9 MB, less than 6.67% of Python3 online submissions for Number of Segments in a String.
"""


class Solution:
    def countSegments(self, s: str) -> int:
        return len([segment for segment in s.split(' ') if len(segment)])
