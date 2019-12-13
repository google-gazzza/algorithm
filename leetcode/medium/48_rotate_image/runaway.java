// https://leetcode.com/problems/rotate-image/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Rotate Image.
// Memory Usage: 36.2 MB, less than 100.00% of Java online submissions for Rotate Image.

class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        for (int y = 0; y < n/2; y++) {
            for (int x = y; x < n - y - 1; x++) {
                int top = matrix[y][x];
                int right = matrix[x][n-y-1];
                int bottom = matrix[n-y-1][n-x-1];
                int left = matrix[n-x-1][y];
                matrix[y][x] = left;
                matrix[x][n-y-1] = top;
                matrix[n-y-1][n-x-1] = right;
                matrix[n-x-1][y] = bottom;
            }
        }
    }
}