"""
https://leetcode.com/problems/max-area-of-island/
Runtime: 132 ms, faster than 92.43% of Python3 online submissions for Max Area of Island.
Memory Usage: 16.4 MB, less than 27.27% of Python3 online submissions for Max Area of Island.
"""


class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        row = len(grid)
        column = len(grid[0])

        def search(i, j):
            if i == -1 or i == row or j == -1 or j == column:
                return 0

            if grid[i][j] == 1:
                grid[i][j] = 0
                return 1 + search(i-1, j) + search(i+1, j) + search(i, j-1) + search(i, j+1)
            else:
                return 0
    
    
        max_area = 0

        for i in range(row):
            for j in range(column):
                if grid[i][j] == 1:
                    area = search(i, j)
                    if area > max_area:
                        max_area = area
        
        return max_area
