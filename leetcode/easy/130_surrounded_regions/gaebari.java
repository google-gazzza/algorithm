//https://leetcode.com/problems/surrounded-regions
//Runtime: 1 ms, faster than 99.67% of Java online submissions for Surrounded Regions.
//Memory Usage: 41.6 MB, less than 67.86% of Java online submissions for Surrounded Regions.

class Solution {
    public void solve(char[][] board) {
        if ( board.length == 0) return;

        int lastRawNum = board.length-1;

        for(int i=0; i < board[0].length; i++ ) {
            setSign(0, i, board);
        }

        for(int i=0; i < board[lastRawNum].length; i++ ) {
            setSign(lastRawNum, i, board);
        }

        for(int i=0; i < board[0].length; i++ ) {
            setSign(i, 0, board);
        }

        for(int i=0; i < board.length; i++ ) {
            setSign(i, board[i].length-1, board);
        }

        for(int i=0; i < board.length; i++ ) {
            for(int j=0; j< board[i].length; j++) {
                if(board[i][j] == 'O') board[i][j] = 'X';
                else if(board[i][j] == '-') board[i][j] = 'O';
            }
        }
    }

    private void setSign(int i,int j, char[][] board){
        if( i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] != 'O') return;
        board[i][j] = '-';
        setSign(i+1, j, board);
        setSign(i, j+1, board);
        setSign(i-1, j, board);
        setSign(i, j-1, board);
    }
}