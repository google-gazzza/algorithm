# 57-insert-interval
# leetcode/medium/57. Insert Interval
# URL: https://leetcode.com/problems/insert-interval/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def isOverwrapped(self, interval1: List[int], interval2: List[int]) -> bool:
        if interval1[0] <= interval2[0] <= interval1[1]:
            return True

        if interval1[0] <= interval2[1] <= interval1[1]:
            return True

        if interval2[0] <= interval1[0] <= interval2[1]:
            return True

        return False

    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        overWrappedList = [newInterval]
        notOverWrappedList = []

        for interval in intervals:
            if self.isOverwrapped(interval, newInterval):
                overWrappedList.append(interval)
            else:
                notOverWrappedList.append(interval)

        if len(overWrappedList) == 0:
            notOverWrappedList.append(newInterval)
            return notOverWrappedList

        overWrappedList = sum(overWrappedList, [])
        overWrappedList.sort()
        notOverWrappedList.append([overWrappedList[0], overWrappedList[-1]])
        notOverWrappedList.sort(key=lambda x: x[0])

        return notOverWrappedList


intervals = [[1, 3], [6, 9]]
newInterval = [2, 5]

solution = Solution()
print(solution.insert(intervals, newInterval))
# Output: [[1,5],[6,9]]

intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
newInterval = [4, 8]
print(solution.insert(intervals, newInterval))
# Output: [[1, 2], [3, 10], [12, 16]]
