"""
1436-destination-city
leetcode/easy/1436. Destination City
Difficulty: easy
URL: https://leetcode.com/problems/destination-city/
"""

from typing import List


class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        count_path_from = []
        count_path_to = []

        for a, b in paths:
            count_path_from.append(a)
            count_path_to.append(b)

        return (set(count_path_to) - set(count_path_from)).pop()


# best practice
# https://leetcode.com/problems/destination-city/discuss/609770/Clean-Python-3-Set-in-two-lines
class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        A, B = map(set, zip(*paths))
        return (B - A).pop()


def test():
    paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]
    output = "Sao Paulo"
    assert Solution().destCity(paths) == output

    paths = [["B", "C"], ["D", "B"], ["C", "A"]]
    output = "A"
    assert Solution().destCity(paths) == output
