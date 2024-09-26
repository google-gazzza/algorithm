/**
 https://leetcode.com/problems/special-positions-in-a-binary-matrix
 runtime:3ms
 memory:44.3mb
 */
class Solution {
    public int numSpecial(int[][] mat) {
        int m = mat.length;
        int n = mat[0].length;
        int answer = 0;
        for(int i=0;i<m;i++){
            int colSum = 0;
            int rowSum = 0;
            for(int j=0;j<n;j++){
                if(mat[i][j] == 1){
                    for(int k=0;k<n;k++){
                        rowSum += mat[i][k];
                    }
                    for(int k=0;k<m;k++){
                        colSum += mat[k][j];
                    }
                    if(rowSum == 1 && colSum == 1){
                        answer++;
                    }
                }
            }

        }
        return answer;
    }
}