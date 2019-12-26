"""
https://leetcode.com/problems/surrounded-regions/
Runtime: 140 ms, faster than 95.31% of Python3 online submissions for Surrounded Regions.
Memory Usage: 14.5 MB, less than 73.33% of Python3 online submissions for Surrounded Regions.
"""


class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        if board == []:
            return
        
        row = len(board)
        column = len(board[0])

        check = [[0]*column for _ in range(row)]

        def search(i, j):
            if i < 0 or j < 0 or i >= row or j >= column:
                return
            if check[i][j] == 0 and board[i][j] == "O":
                check[i][j] = 1
                search(i-1, j)
                search(i+1, j)
                search(i, j-1)
                search(i, j+1)
            else:
                return

        for i in range(row):
            search(i,0)
            search(i, column-1)

        for i in range(column):
            search(0, i)
            search(row-1, i)

        for i in range(row):
            for j in range(column):
                if check[i][j] == 0:
                    board[i][j] = "X"
