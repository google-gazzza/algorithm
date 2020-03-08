"""https://leetcode.com/problems/number-of-segments-in-a-string/

Runtime: 28 ms, faster than 73.14% of Python3 online submissions for Number of Segments in a String.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Number of Segments in a String.
"""
class Solution:
    def countSegments(self, s: str) -> int:
        return len(s.split())
