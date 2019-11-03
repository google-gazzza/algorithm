"""
https://leetcode.com/problems/valid-sudoku/
Runtime: 208 ms, faster than 5.55% of Python3 online submissions for Valid Sudoku.
Memory Usage: 29.4 MB, less than 5.88% of Python3 online submissions for Valid Sudoku.
"""
import numpy

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        def check_is_valid(nums):
            check = [False] * 10
            for num in nums:
                if num != ".":
                    if check[int(num)] == True:
                        return False
                    else:
                        check[int(num)] = True
            return True

        for row in board:
            if not check_is_valid(row):
                return False

        for column in list(zip(*board)):
            if not check_is_valid(column):
                return False

        np_board = numpy.array(board)
        for i in range(3):
            for j in range(3):
                matrix = np_board[i * 3:(i + 1) * 3, j * 3:(j + 1) * 3]
                matrix = numpy.reshape(matrix, [-1])
                if not check_is_valid(matrix):
                    return False
        return True
