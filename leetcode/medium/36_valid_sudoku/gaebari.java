//https://leetcode.com/problems/valid-sudoku
//Runtime: 1 ms, faster than 100.00% of Java online submissions for Valid Sudoku.
//Memory Usage: 41.1 MB, less than 97.10% of Java online submissions for Valid Sudoku.

class Solution {
    public boolean isValidSudoku(char[][] board) {
        for(int i= 0; i < 9; i++) {
            boolean[] row = new boolean[9];
            boolean[] col = new boolean[9];
            boolean[] box = new boolean[9];
            for(int j= 0; j < 9; j++) {
                if(board[i][j] == '.') {}
                else if (row[board[i][j] -'1']) return false;
                else row[board[i][j] - '1'] = true;

                if(board[j][i] == '.') {}
                else if (col[board[j][i] - '1']) return false;
                else col[board[j][i] - '1'] = true;

                int m = i / 3 * 3 + j / 3;
                int n = i % 3 * 3 + j % 3;

                if(board[m][n] == '.') {}
                else if (box[board[m][n] - '1']) return false;
                else box[board[m][n] - '1'] = true;
            }
        }
        return true;
    }
}