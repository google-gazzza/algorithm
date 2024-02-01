//https://leetcode.com/problems/rotate-image
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Rotate Image.
//Memory Usage: 40 MB, less than 5.77% of Java online submissions for Rotate Image.
class Solution {
    public void rotate(int[][] matrix) {
        for (int i = 0, e = matrix.length -1; i < e ; i++, e--) {
            int[] tmpList = matrix[e];
            matrix[e] = matrix[i];
            matrix[i] = tmpList;
        }

        for (int i = 0; i < matrix.length; i++) {
            for (int j = i+1; j < matrix[i].length; j++) {
                int tmp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = tmp;
            }
        }
    }
}