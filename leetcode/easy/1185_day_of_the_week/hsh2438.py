"""
https://leetcode.com/problems/day-of-the-week/
Runtime: 28 ms, faster than 57.23% of Python3 online submissions for Day of the Week.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Day of the Week.
"""


import datetime


class Solution:
    
    def dayOfTheWeek(self, day: int, month: int, year: int) -> str:
        day_dict = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        return day_dict[datetime.date(year, month, day).weekday()]
        
