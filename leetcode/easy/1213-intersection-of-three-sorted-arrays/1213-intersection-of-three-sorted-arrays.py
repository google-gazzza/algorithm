"""
1213-intersection-of-three-sorted-arrays
leetcode/easy/1213. Intersection of Three Sorted Arrays
Difficulty: easy
URL: https://leetcode.com/problems/intersection-of-three-sorted-arrays/
"""

from typing import List


class Solution:
    def intersection(self, a, b):
        return list(sorted(set(a) - (set(a) - set(b))))

    def arraysIntersection(self, arr1: List[int], arr2: List[int], arr3: List[int]) -> List[int]:
        return self.intersection(self.intersection(arr1, arr2), arr3)


def test():
    solution = Solution()

    arr1 = [1, 2, 3, 4, 5]
    arr2 = [1, 2, 5, 7, 9]
    arr3 = [1, 3, 4, 5, 8]
    output = [1, 5]
    assert solution.arraysIntersection(arr1, arr2, arr3) == output

    arr1 = [197, 418, 523, 876, 1356]
    arr2 = [501, 880, 1593, 1710, 1870]
    arr3 = [521, 682, 1337, 1395, 1764]
    output = []
    assert solution.arraysIntersection(arr1, arr2, arr3) == output
