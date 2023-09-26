/**
 https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/submissions/1060057398/
 Runtime: 17 ms
 Memory: 44 MB
 */
class Solution {

    public int[] countPoints(int[][] points, int[][] queries) {
        int len = queries.length;
        int [] answer = new int[len];
        for(int i=0;i<len ;i++){
            int count = 0;
            for(int j = 0;j<points.length;j++){
                int pointX = points[j][0];
                int pointY = points[j][1];
                int queryX = queries[i][0];
                int queryY = queries[i][1];
                int radius = queries[i][2];
                if(
                        ((pointX-queryX)*(pointX-queryX)) +
                                ((pointY-queryY)*(pointY-queryY)) <= radius * radius ){
                    count++;
                }
            }
            answer[i] = count;
        }
        return answer;
    }

}