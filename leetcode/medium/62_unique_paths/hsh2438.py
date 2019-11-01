"""
https://leetcode.com/problems/unique-paths
Runtime: 40 ms, faster than 45.14% of Python3 online submissions for Unique Paths.
Memory Usage: 13.9 MB, less than 5.77% of Python3 online submissions for Unique Paths.
"""


class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        path = [[1]*n]*m
        for i in range(1, m):
            for j in range(1, n):
                    path[i][j] = path[i][j-1]+path[i-1][j]

        return path[m-1][n-1]
