"""
62-unique-paths
leetcode/medium/62. Unique Paths
Difficulty: medium
URL: https://leetcode.com/problems/unique-paths/
"""


class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        matrix = [[0 for _ in range(n)] for _ in range(m)]
        matrix[0][0] = 0

        for i in range(m):
            for j in range(n):
                top = 0
                left = 0

                if i > 0:
                    top = matrix[i - 1][j]

                if j > 0:
                    left = matrix[i][j - 1]

                matrix[i][j] = max(1, top + left)

        return matrix[len(matrix) - 1][len(matrix[0]) - 1]


def test():
    m = 3
    n = 7
    output = 28
    assert Solution().uniquePaths(m, n) == output

    m = 3
    n = 2
    output = 3
    assert Solution().uniquePaths(m, n) == output
    