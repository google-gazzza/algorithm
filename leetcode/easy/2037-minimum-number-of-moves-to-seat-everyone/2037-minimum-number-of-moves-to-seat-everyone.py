"""
2037-minimum-number-of-moves-to-seat-everyone
leetcode/medium/2037. Minimum Number of Moves to Seat Everyone
Difficulty: easy
URL: https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/
"""

from typing import List


class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        return sum(abs(a - b) for a, b in zip(sorted(seats), sorted(students)))


def test():
    seats = [3, 1, 5]
    students = [2, 7, 4]
    output = 4
    assert Solution().minMovesToSeat(seats, students) == output

    seats = [4, 1, 5, 9]
    students = [1, 3, 2, 6]
    output = 7
    assert Solution().minMovesToSeat(seats, students) == output

    seats = [2, 2, 6, 6]
    students = [1, 3, 2, 6]
    output = 4
    assert Solution().minMovesToSeat(seats, students) == output
    