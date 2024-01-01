/*https://school.programmers.co.kr/learn/courses/30/lessons/42898*/
class Solution {

    public int solution(int m, int n, int[][] puddles) {
        int[][] map = new int[n][m];
        for (int[] puddle : puddles) {
            map[puddle[1]-1][puddle[0]-1] = -1;
        }
        map[0][0] = 1;
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(map[i][j] != -1){//웅덩이
                    if(i>=1 && map[i-1][j] != -1){
                        map[i][j]+=map[i-1][j];
                    }
                    if(j>=1 && map[i][j-1] != -1){
                        map[i][j]+=map[i][j-1];
                    }
                    if(map[i][j] > 1000000007){
                        map[i][j] %=1000000007;
                    }
                }

            }
        }
        return map[n-1][m-1];
    }
}