//https://leetcode.com/problems/unique-paths
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Unique Paths.
//Memory Usage: 36.3 MB, less than 5.10% of Java online submissions for Unique Paths.

class Solution {
    public int uniquePaths(int cols, int rows) {
        int[][] matrix = new int[rows][cols];

        for(int row=0;row<rows;row++)
            matrix[row][0] = 1;

        for(int col=0;col<cols;col++)
            matrix[0][col] = 1;

        for(int i=1;i<rows;i++)
            for(int j=1;j<cols;j++)
                matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];

        return matrix[rows-1][cols-1];
    }
}