"""
https://leetcode.com/problems/rotate-image/
Runtime: 36 ms, faster than 37.11% of Python3 online submissions for Rotate Image.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Rotate Image.
"""


class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix)
        for r in range(int(n / 2)):
            for c in range(r, n - r - 1):
                temp = matrix[r][c]
                matrix[r][c] = matrix[n - 1 - c][r]
                matrix[n - 1 - c][r] = matrix[n - 1 - r][n - 1 - c]
                matrix[n - 1 - r][n - 1 - c] = matrix[c][n - 1 - r]
                matrix[c][n - 1 - r] = temp
        
