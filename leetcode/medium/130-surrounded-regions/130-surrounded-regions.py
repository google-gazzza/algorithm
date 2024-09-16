# leetcode/medium/130. Surrounded Regions
# 130-surrounded-regions
# URL: https://leetcode.com/problems/surrounded-regions/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def rollback_markers(self, board):
        for i in range(len(board)):
            for j in range(len(board[i])):
                if board[i][j] == "1":
                    board[i][j] = "O"

    def is_island(self, board, i, j):
        is_connected_edge = False

        def depth_first_search(i, j):
            if i < 0 or i >= len(board) or j < 0 or j >= len(board[i]):
                return

            if board[i][j] == "O":
                nonlocal is_connected_edge

                board[i][j] = "1"

                if i == 0 or i == len(board) - 1 or j == 0 or j == len(board[i]) - 1:
                    is_connected_edge = True

                depth_first_search(i - 1, j)
                depth_first_search(i + 1, j)
                depth_first_search(i, j - 1)
                depth_first_search(i, j + 1)

        depth_first_search(i, j)

        if is_connected_edge:
            return False

        return True

    def remove_island(self, board, i, j):
        if i < 0 or i >= len(board) or j < 0 or j >= len(board[i]):
            return

        if board[i][j] == "1":
            board[i][j] = "X"
            self.remove_island(board, i - 1, j)
            self.remove_island(board, i + 1, j)
            self.remove_island(board, i, j - 1)
            self.remove_island(board, i, j + 1)

    def solve(self, board: List[List[str]]) -> None:
        for i in range(len(board)):
            for j in range(len(board[i])):
                if board[i][j] == 'O' and self.is_island(board, i, j):
                    self.remove_island(board, i, j)

        self.rollback_markers(board)


board = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
]
# Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
print(Solution().solve(board))
print(board)

board = [["O", "O", "O"], ["O", "O", "O"], ["O", "O", "O"]]
print(Solution().solve(board))
print(board)
# [["O","O","O"],["O","O","O"],["O","O","O"]]
