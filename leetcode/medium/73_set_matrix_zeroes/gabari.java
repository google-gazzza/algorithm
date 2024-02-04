//https://leetcode.com/problems/set-matrix-zeroes
//Runtime: 1 ms, faster than 91.68% of Java online submissions for Set Matrix Zeroes.
//Memory Usage: 41.4 MB, less than 98.57% of Java online submissions for Set Matrix Zeroes.

class Solution {
    public void setZeroes(int[][] matrix) {
        if(matrix == null || matrix.length == 0) return;
        boolean firstRow = false, firstCol = false;
        int row = matrix.length, col = matrix[0].length;
        for(int i = 0;i<row;i++){
            if(matrix[i][0] == 0) {
                firstCol = true;
                break;
            }
        }
        for(int j = 0;j<col;j++){
            if(matrix[0][j] == 0){
                firstRow = true;
                break;
            }
        }
        for(int i = 1;i < row;i++){
            for(int j =1;j<col;j++){
                if(matrix[i][j] == 0){
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        for(int i = 1;i<row;i++){
            for(int j = 1;j<col;j++){
                if(matrix[i][0] ==0 || matrix[0][j] == 0) matrix[i][j] = 0;
            }
        }
        if(firstCol){
            for(int i = 0;i<row;i++) matrix[i][0] = 0;
        }
        if(firstRow){
            for(int j = 0; j< col;j++) matrix[0][j] = 0;
        }
    }
}