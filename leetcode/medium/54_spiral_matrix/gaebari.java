//https://leetcode.com/problems/spiral-matrix
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Spiral Matrix.
//Memory Usage: 37.3 MB, less than 5.21% of Java online submissions for Spiral Matrix.

class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> r = new ArrayList<Integer>();
        if (matrix == null || matrix.length == 0) return r;
        int m = matrix.length, n = matrix[0].length;
        int up = 0 , down = matrix.length-1, left = 0, right = matrix[0].length-1;
        while ( r.size() < m * n ) {
            for ( int i = left; i <= right && r.size() < m * n; i++)r.add(matrix[up][i]);
            for ( int i = up +1; i <= down-1 && r.size() < m * n; i++) r.add(matrix[i][right]);
            for ( int i =  right; i >= left && r.size() < m * n; i--) r.add(matrix[down][i]);
            for ( int i =  down-1; i >= up+1 && r.size() < m * n; i--) r.add(matrix[i][left]);

            up++; down--; left++; right--;
        }
        return r;
    }
}