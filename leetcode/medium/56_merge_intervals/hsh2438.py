"""
https://leetcode.com/problems/merge-intervals/
Runtime: 104 ms, faster than 51.71% of Python3 online submissions for Merge Intervals.
Memory Usage: 14.4 MB, less than 13.04% of Python3 online submissions for Merge Intervals.
"""


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if intervals == []:
            return []
        i = 1
        intervals.sort()
        while i != len(intervals):
            if intervals[i][0] <= intervals[i - 1][1]:
                intervals[i - 1][1] = max(intervals[i - 1][1], intervals[i][1])
                intervals[i - 1][0] = min(intervals[i - 1][0], intervals[i][0])
                del intervals[i]
            else:
                i += 1

        return intervals
