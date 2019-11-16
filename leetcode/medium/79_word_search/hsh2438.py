"""
https://leetcode.com/problems/word-search/
Runtime: 376 ms, faster than 64.29% of Python3 online submissions for Word Search.
Memory Usage: 13.8 MB, less than 100.00% of Python3 online submissions for Word Search.
"""

class Solution:

    def check(self, i, j, word, board):
        if len(word) == 0:
            return True

        if i < 0 or j < 0 or i == self.row or j == self.col or board[i][j] != word[0]:
            return False

        temp = board[i][j]
        board[i][j] = ''
        result = self.check(i - 1, j, word[1:], board) or self.check(i + 1, j, word[1:], board) or \
                 self.check(i, j - 1, word[1:], board) or self.check(i, j + 1, word[1:], board)
        board[i][j] = temp
        return result

    def exist(self, board, word):
        self.row, self.col = len(board), len(board[0])

        for i in range(self.row):
            for j in range(self.col):
                if self.check(i, j, word, board):
                    return True
        return False