"""
https://leetcode.com/problems/search-a-2d-matrix/
Runtime: 60 ms, faster than 93.54% of Python3 online submissions for Search a 2D Matrix.
Memory Usage: 14.8 MB, less than 5.88% of Python3 online submissions for Search a 2D Matrix.
"""


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if matrix == [] or matrix == [[]]:
            return False
        
        which_row = -1
        
        for idx, row in enumerate(matrix):
            if len(row) > 0 and row[0] > target:
                which_row = idx-1
                break
        
        for element in matrix[which_row]:
            if element == target:
                return True
        
        return False
                
