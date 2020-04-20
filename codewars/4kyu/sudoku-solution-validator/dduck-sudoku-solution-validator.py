# Sudoku Solution Validator
# https://www.codewars.com/kata/529bf0e9bdf7657179000008

from unittest import TestCase


def valid_solution(board):
    is_row_valid = True

    for row in board:
        if sum(row) != 45:
            is_row_valid = False
            break

    is_column_valid = True
    for i in range(9):
        total = 0
        for j in range(9):
            total += board[j][i]
        if total != 45:
            is_column_valid = False
            break

    is_box_valid = True
    for i in range(0, 9, 3):
        for j in range(0, 9, 3):
            total = 0
            for k in range(3):
                total += board[i][j + k]
                total += board[i + 1][j + k]
                total += board[i + 2][j + k]
            if total != 45:
                is_box_valid = False
                break

    return is_row_valid and is_column_valid and is_box_valid


TestCase().assertEqual(valid_solution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                                       [6, 7, 2, 1, 9, 5, 3, 4, 8],
                                       [1, 9, 8, 3, 4, 2, 5, 6, 7],
                                       [8, 5, 9, 7, 6, 1, 4, 2, 3],
                                       [4, 2, 6, 8, 5, 3, 7, 9, 1],
                                       [7, 1, 3, 9, 2, 4, 8, 5, 6],
                                       [9, 6, 1, 5, 3, 7, 2, 8, 4],
                                       [2, 8, 7, 4, 1, 9, 6, 3, 5],
                                       [3, 4, 5, 2, 8, 6, 1, 7, 9]]), True)

TestCase().assertEqual(valid_solution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                                       [6, 7, 2, 1, 9, 0, 3, 4, 9],
                                       [1, 0, 0, 3, 4, 2, 5, 6, 0],
                                       [8, 5, 9, 7, 6, 1, 0, 2, 0],
                                       [4, 2, 6, 8, 5, 3, 7, 9, 1],
                                       [7, 1, 3, 9, 2, 4, 8, 5, 6],
                                       [9, 0, 1, 5, 3, 7, 2, 1, 4],
                                       [2, 8, 7, 4, 1, 9, 6, 3, 5],
                                       [3, 0, 0, 4, 8, 1, 1, 7, 9]]), False)
