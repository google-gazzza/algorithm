"""
https://leetcode.com/problems/valid-sudoku/
Runtime: 100 ms, faster than 79.87% of Python3 online submissions for Valid Sudoku.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Valid Sudoku.
"""


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for row in board:
            if not self._isValid(row):
                return False

        for col in [[row[i] for row in board] for i in range(len(board))]:
            if not self._isValid(col):
                return False

        for i in range(0, 9, 3):
            for j in range(0, 9, 3):
                sub_board_nums = [b for sub_row in board[i: i + 3] for b in sub_row[j:j + 3]]
                if not self._isValid(sub_board_nums):
                    return False

        return True

    def _isValid(self, nums):
        return len(set(nums) - {'.'}) == sum([1 for r in nums if r != '.'])

