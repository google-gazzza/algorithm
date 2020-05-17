"""
https://leetcode.com/problems/minimum-time-difference/
Runtime: 88 ms, faster than 29.97% of Python3 online submissions for Minimum Time Difference.
Memory Usage: 16.6 MB, less than 100.00% of Python3 online submissions for Minimum Time Difference.
"""


class Solution:
    def findMinDifference(self, timePoints: List[str]) -> int:

        def get_time_difference(time1, time2):
            time1 = time1.split(":")
            time2 = time2.split(":")
            hour = int(time2[0]) - int(time1[0])
            minute = int(time2[1]) - int(time1[1])
            difference = abs(hour*60 + minute)
            if difference > 720:
                difference = 1440 - difference
            return difference

        timePoints.sort()

        minimum_time_difference = 24 * 60

        for i in range(len(timePoints)):
            if i == len(timePoints) - 1:
                difference = get_time_difference(timePoints[i], timePoints[0])
            else:
                difference = get_time_difference(timePoints[i], timePoints[i + 1])
            if difference < minimum_time_difference:
                minimum_time_difference = difference

        return minimum_time_difference
                
