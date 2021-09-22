"""
1791-find-center-of-star-graph
leetcode/easy/1791. Find Center of Star Graph
Difficulty: easy
URL: https://leetcode.com/problems/find-center-of-star-graph/
"""

from typing import List


class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        return edges[0][0] if edges[0][0] in edges[1] else edges[0][1]


def test():
    s = Solution()

    edges = [[1, 2], [2, 3], [4, 2]]
    output = 2
    s.findCenter(edges) == output

    edges = [[1, 2], [5, 1], [1, 3], [1, 4]]
    output = 1
    s.findCenter(edges) == output
