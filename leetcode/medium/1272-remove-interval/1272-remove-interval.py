from typing import List


class Solution:
    def removeInterval(self, intervals: List[List[int]], toBeRemoved: List[int]) -> List[List[int]]:
        result = []

        for interval in intervals:
            if interval[1] <= toBeRemoved[0] or toBeRemoved[1] <= interval[0]:
                result.append(interval)
                continue

            if interval[0] < toBeRemoved[0]:
                result.append([interval[0], toBeRemoved[0]])

            if toBeRemoved[1] < interval[1]:
                result.append([toBeRemoved[1], interval[1]])

        return result
